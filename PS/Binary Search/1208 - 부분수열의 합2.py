import sys

input = sys.stdin.readline

N, S = map(int, input().split())
Nlist = list(map(int, input().split()))

M = N//2 
N = N-M 
Left = [0] * (1<<N) # () 잊지 말기!
Right = [0] * (1<<M)

for i in range(1<<N):
    for j in range(N):
        if (i & (1<<j)) > 0 :
            Left[i] += Nlist[j]

for i in range(1<<M):
    for j in range(M): # range(N, N+M) 아니고 밑에 Nlist[j]를 Nlist[j+N]으로 하는 거 ! cuz i & 1<<j
        if (i & (1<<j)) > 0 :
            Right[i] += Nlist[j+N]

Left.sort()
Right.sort(reverse = True) # reversed = True 아니고 reverse = True
lp, rp, count = 0, 0, 0

while (lp < len(Left)) and (rp < len(Right)) : # (lp < N) & (rp < M) 아님! lp < (1<<N) 이 맞음
                    # &은 비교 연산자. and는 논리 연산자. 헷갈리지 말자!
    if Left[lp] + Right[rp] == S:
        lp += 1
        rp += 1
        cl = 1
        cr = 1
        while lp<len(Left) and Left[lp] == Left[lp-1]:  # 조건문 x 반복문 o
            cl +=1
            lp +=1
        while rp<len(Right) and Right[rp] == Right[rp-1]:
            cr +=1
            rp +=1
        count += cl*cr
    elif Left[lp] + Right[rp] < S:
        lp +=1
    elif Left[lp] + Right[rp] > S:
        rp +=1

if S == 0: # 공집합도 빼먹지 말기
    count -= 1

print(count)