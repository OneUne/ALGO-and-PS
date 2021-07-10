"https://hazung.tistory.com/131"
"[5,1,3,5,10]이면 5+1+3이런식으로가다가 s넘으면 왼쪽부터 빼면서 1+3 이렇게 쭉 가서 제일 작은 result 찾는 코드"

N, S = map(int, input().split())
A = list(map(int, input().split()))
left, right, hap, result, temp = 0, 0, A[0], 0, 0
while left <= right and right < N:
    if hap < S:
        right += 1
        if right < N:
            hap += A[right]
    elif hap >= S:
        temp = right - left + 1
        if result == 0:
            result = temp
        else:
            result = min(result, temp)
        if left < right:
            hap -= A[left]
            left += 1
        else:
            right += 1
            if right < N:
                hap += A[right]
print(result)