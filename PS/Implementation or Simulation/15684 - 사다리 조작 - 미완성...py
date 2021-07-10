#https://m.blog.naver.com/lizziechung/221967551739

from sys import stdin
input = stdin.readline

def play():
    for col in range(1,N):
        curR, curC = 0, col
        while curR < H+1 :
            if visited[curR][curC] == 1:
                if (curR,curC) in ladders:
                    curC += 1
                else:
                    curC -= 1
            curR +=1
        if curC != col :
            return False
    return True

def setLadder(row, cnt):
    global result
    if cnt > 3:
        return
    else:
        for r in range(row, H):
            for c in range(N):
                if visited[r][c] == 0 and visited[r][c+1] == 0:
                    visited[r][c], visited[r][c+1] = 1, 1
                    ladders.append((r,c))

                    if play():
                        if result == -1:
                            result = cnt
                        else:
                            result = min(result,cnt)
                    else:
                        setLadder(r, cnt+1)
                    visited[r][c], visited[r][c+1] = 0, 0
                    ladders.pop()


N, M, H = map(int,input().split()) # 세로선, 가로선, 가로선 놓을 수 있는 위치 개수 (2 ≤ N ≤ 10, 1 ≤ H ≤ 30, 0 ≤ M ≤ (N-1)×H)
visited = [[0 for _ in range(N+1)] for _ in range(H+1)]
ladders = []
result = -1

if M == 0 :
    print(0)

elif M == 1 :
    print(1)

else:
    for _ in range(M):
        a, b = map(int,input().split())
        visited[a][b], visited[a][b+1] = 1, 1
        ladders.append((a,b))
    if play():
        result = 0
    else:
        setLadder(0,1)

    print(result)
    