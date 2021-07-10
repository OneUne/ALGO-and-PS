#출처: https://fullmoon1344.tistory.com/87 [코드이터]

from collections import deque 
def bfs(x, y): 
    direction = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)]
    queue = deque() #탐색을 하려는 좌표를 담는다. 
    queue.append((x, y))
    maps[x][y] = 0 
    while queue: 
        now = queue.popleft() 
        for i in range(8): #상하좌우 대각선까지 탐색 
            nx = now[0] + direction[i][0] 
            ny = now[1] + direction[i][1] 
            if(0 <= nx < h) and (0 <= ny < w): 
                if maps[nx][ny] == 1: 
                    maps[nx][ny] = 0 
                    queue.append((nx, ny)) 

while True: 
    w, h = map(int, input().split()) 
    maps = []
    cnt = 0 
    if w == 0 and h == 0: 
        break
    for _ in range(h): 
        tmp = list(map(int, input().split())) 
        maps.append(tmp) 
    for i in range(h): 
        for j in range(w): 
            if maps[i][j] != 0: 
                cnt += 1 
                bfs(i, j)
    
    print(cnt)

