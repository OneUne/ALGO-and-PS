# 0부터 N까지의 정수 K개를 더해서 그 합이 N이 되는 경우의 수

import sys
input = sys.stdin.readline

N, K = map(int, input().split())

if N == 1:
    print(K)
if K == 1:
    print(1)
else:
    count = N+1
    for i in range(3, K+1):
        count = count*(count+1)//2 # 정수 나눗셈
    print(count%1000000000)