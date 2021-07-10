from sys import stdin
input = stdin.readline

N, M = map(int,input().split())
r, c, d = map(int, input().split())
maplist = []
direction = [(-1,0),(0,1),(1,0),(0,-1)]
for i in range(N):
    maplist.append(list(map(int,input().split())))
