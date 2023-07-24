from collections import deque

maps = [[0,1],[1,0]]
maparr = [[0,1],[1,0]]
visited = [[0,0],[0,0]]
w, h = 2,2

print("---------------정답코드--------------")
x, y = 0, 0
direction = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)]
queue = deque() #탐색을 하려는 좌표를 담는다. 
queue.append((x, y))
maps[x][y] = 0 
while queue: 
    now = queue.popleft()
    print(now)
    for i in range(8): #상하좌우 대각선까지 탐색 
        nx = now[0] + direction[i][0] 
        ny = now[1] + direction[i][1] 
        if(0 <= nx < h) and (0 <= ny < w): 
            if maps[nx][ny] == 1: 
                maps[nx][ny] = 0 
                queue.append((nx, ny))

print("---------------내코드--------------")
i, j = 0, 0
queue = deque([(i,j)])
while queue:
    x, y = queue.popleft()
    print((x,y))
    p_route = [(x,y), (x, y-1), (x, y+1), (x-1,y), (x+1,y), (x-1,y-1), (x-1, y+1), (x+1,y-1), (x+1,y+1)]
    for (tx, ty) in p_route:
        if (0<=tx<h and 0<=ty<w) :
            if visited[tx][ty] == 0:
                visited[tx][ty] = 1
                if maparr[tx][ty] == 1:
                    queue.append((tx,ty))