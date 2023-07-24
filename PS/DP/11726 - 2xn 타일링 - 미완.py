import sys
input = sys.stdin.readline

n = int(input())
methods = [0]*(n+1)

for i in range(1, n+1):
    if i in (1,2,3):
        methods[i] = i
    else:
        methods[i] = (methods[i-1]-1)*2 + (methods[i-2]*2)

print(methods[n] % 10007)
