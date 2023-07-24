"https://kyun2da.github.io/2020/09/27/partialSum/"

n, s = map(int, input().split())

arr = list(map(int, input().split()))

end = 0
# 초기의 합을 arr[0]으로 해준다.
intervalSum = arr[0]
ans = float('inf')

# 투 포인터 돌리면서 가장 최소의 길이 구하기
for start in range(n):
    while intervalSum < s and end < n:
        end += 1
        if end == n:
            break
        intervalSum += arr[end]
    if intervalSum >= s:
        ans = min(ans, end - start + 1)
    intervalSum -= arr[start]

if ans == float('inf'):
    print(0)
else:
    print(ans)