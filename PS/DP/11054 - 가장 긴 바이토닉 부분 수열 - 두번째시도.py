import sys
from bisect import bisect_left, bisect_right

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
Dleft = [A[0]]
Dright = [A[-1]]


for i in range(N):
    j = -1-i
    if A[i] > Dleft[-1]:
        Dleft.append(A[i])
    else:
        idx = bisect_left(Dleft, A[i])
        Dleft[idx] = A[i]
    if A[j] > Dright[-1]:
        Dright.append(A[j])
    else:
        idx = bisect_left(Dright, A[j])
        Dright[idx] = A[j]

