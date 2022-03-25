import sys
input = sys.stdin.readline

N, K = map(int,(input().split()))
items = [(0,0)]
dp = [[0]*(K+1) for _ in range(N+1)] # (N+1) x (K+1) matrix

for i in range(N) :
    items.append(tuple(map(int,input().split())))

for i in range(1,N+1):
    for j in range(1, K+1):
        W, V = items[i][0], items[i][1]
        if j >= W:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-W] + V)
            # i번째 아이템을 챙기지 않았을 때 / 챙겼을 때의 최댓값
        else:
            dp[i][j] = dp[i-1][j]

print(dp[N][K])

"""
전 줄만 필요해서 갈아끼우면서 할 수 있음.

import sys;r=sys.stdin.readline
n,k=map(int,r().split())
d=[0]*(k+1)
for _ in range(n):
  w,v=map(int,r().split())
  for i in range(k,w-1,-1):
      d[i]=max(d[i-w]+v,d[i])
print(d[k])
"""