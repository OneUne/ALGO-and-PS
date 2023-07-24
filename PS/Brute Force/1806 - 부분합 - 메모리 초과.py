import sys
from collections import deque

input = sys.stdin.readline
N, S = map(int, input().split())
nums = list(map(int, input().split()))

def Subtotal():
    if sum(nums) < S :
        return 0
    queue = deque()
    for i in range(N-1):
        queue.append((nums[i:i+2], sum(nums[i:i+2])))
        if sum(nums[i:i+2]) > S : return 2
    idx = 2
    while queue:
        elem, csum = queue.popleft()
        if csum >= S : return len(elem)
        if idx < N:
            queue.append((elem+[nums[idx]], csum+nums[idx]))
            if csum+nums[idx] > S : return len(elem)+1
            idx +=1
        elif idx == N :
            idx = len(elem)+1

print(Subtotal())