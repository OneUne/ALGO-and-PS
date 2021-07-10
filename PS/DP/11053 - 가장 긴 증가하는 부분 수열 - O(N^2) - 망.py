# N개의 수들에 대해 자기 자신 전의 모든 수를 다 훑어보는 O(N^2) 알고리즘

import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
D = []

for i in range(N):
    length = 1
    for j in range(i):
        while length in D:
            if A[j] < A[i] :
                Ai = [A[idx] for idx, value in enumerate(D) if value == length]
                length = D[A.index(max(Ai))]+1
            else: break
    D.append(length)

print(max(D))
