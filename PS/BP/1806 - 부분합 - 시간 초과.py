import sys

input = sys.stdin.readline
N, S = map(int, input().split())
nums = list(map(int, input().split()))

def Subtotal():
    if sum(nums) < S :
        print(0)
    breaker = 0
    j = 2
    while j < N:
        for i in range(N):
            if sum(nums[i:i+j]) > S :
                print(j)
                breaker = 1
                break
        if breaker == 1 :
            break
        j +=1

Subtotal()