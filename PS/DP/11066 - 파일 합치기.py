# https://data-make.tistory.com/402

import sys

input = sys.stdin.readline

T = int(input())

for case in range(T):
    K = int(input())
    filesize = list(map(int,input().split()))
    S = [0 for _ in range(K+1)]
    
    # 누적합
    for i in range(1, K+1):
        S[i] = S[i-1] + filesize[i-1]

    dp = [[0] *(K+1) for _ in range(K+1)]

    for i in range(2, K+1):
        for j in range(1, K+2-i):
            a = sys.maxsize
            for k in range(i-1):
                a = min(a, dp[j][j+k] + dp[j+k+1][j+i-1])
            # dp[j][j+i-1] = min(dp[j][j+k] + dp[j+k+1][j+i-1] for k in range(i-1)) + (S[j+i-1] - S[j-1])

    print(dp[1][K])
