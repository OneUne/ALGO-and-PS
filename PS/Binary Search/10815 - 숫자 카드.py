import sys

input = sys.stdin.readline
N = int(input())
Nlist = sorted(list(map(int, input().split())))
M = int(input())
Mlist = list(map(int, input().split()))
result = [0]*M

for i in range(M):
    if Mlist[i] in Nlist:
        result[i] = 1

print(' '.join(map(str,result)))

import sys
input = sys.stdin.readline
n = int(input())
s = list(map(int, input().split()))
m = int(input())
s_ = list(map(int, input().split()))
s.sort()
for i in s_:
    low, high = 0, n
    while low <= high:
        mid = (low + high) // 2
        if 0 <= mid < n:
            if s[mid] < i: low = mid + 1
            else: high = mid - 1
        else: break
    if 0 <= high + 1 < n:
        if s[high + 1] == i: print(1, end=" ")
        else: print(0, end=" ")
    else: print(0, end=" ")