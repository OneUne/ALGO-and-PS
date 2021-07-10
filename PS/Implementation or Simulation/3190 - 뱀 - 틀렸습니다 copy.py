# 테스트케이스는 정답.. 그런데 틀렸습니다..

import sys
from collections import deque

def change(d, c):
    if c == "L":
        d = (d - 1) % 4
    else:
        d = (d + 1) % 4
    return d

dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

input = sys.stdin.readline
N = int(input())
K = int(input())
apple = []
for i in range(K):
    row, col = map(int,input().split())
    apple.append([row-1,col-1])
L = int(input())
times = {}
for i in range(L):
    X, C = input().split()
    times[int(X)] = C

playing = True
time = 0
pos = [0,0]
snakepos = deque([[0,0]])
direction = 1

while playing:
    time +=1
    pos = [pos[0] + dy[direction], pos[1] + dx[direction]]
    
    if (pos not in snakepos) and 0 <= pos[0] < N and 0 <= pos[1] < N:
        snakepos.appendleft(pos.copy())
        if pos not in apple:
            snakepos.pop()
    
        if time in times.keys():
            direction = change(direction, times[time])
    else:
        playing = False

print(time)