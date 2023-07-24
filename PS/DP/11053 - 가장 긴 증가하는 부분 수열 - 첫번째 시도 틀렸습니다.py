import sys
input = sys.stdin.readline

N = int(input())
A = list(map(int, input().split()))
D = [1]
length = 1

for i in range(1, N):
    if A[i] > A[i-1] :
        length +=1
        while length in D:
            if A[D.index(length)] < A[i]:
                length +=1
            else: break
    else :
        length = 1
    D.append(length)

print(max(D))
