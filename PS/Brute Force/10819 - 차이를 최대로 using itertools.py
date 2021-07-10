#itertools 사용한 게 176ms 순열 작성한 파일은 292ms
from itertools import permutations

howmany = int(input())
elems = list(map(int, input().split()))

perms = list(permutations(elems, howmany))

max = 0

for i in perms:
    sum = 0
    for j in range(howmany-1):
        sum += abs(i[j] - i[j+1])
    if sum > max :
        max = sum

print(max)