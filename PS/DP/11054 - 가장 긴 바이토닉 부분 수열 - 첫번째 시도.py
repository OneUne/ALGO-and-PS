import sys
from bisect import bisect_left, bisect_right

input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
result = [A[0]]
maxvalue = max(A)
tp = 0

for i in range(N):
    if A[i] == maxvalue : # 1 5 2 1 4 3 4 5 2 1 의 경우에서 X
        tp = 1
    
    if tp == 0:
        if A[i] > result[-1]:
            result.append(A[i])
        else:
            idx = bisect_left(result, A[i])
            result[idx] = A[i]
    else:
        if A[i] < result[-1]:
            result.append(A[i])
        else:
            idx = bisect_right(result, A[i])
            result[idx] = A[i] #! out of range

print(len(result))