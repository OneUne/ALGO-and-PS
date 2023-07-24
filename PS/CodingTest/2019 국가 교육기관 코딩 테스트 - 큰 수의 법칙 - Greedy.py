"""
입력
- 첫번째 줄에 N (2 <= N <= 1000), M (1 <= M <= 10000), K (1 <= K <= 10000)의 자연수가 주어지며, 각 자연수는 공백으로 구분한다.
- N은 배열의 크기, M은 숫자가 더해지는 횟수, K는 연속해서 더할 수 있는 횟수이다.
- 둘째 줄에 N개의 자연수가 주어진다. 각 자연수는 공백으로 구분하며 1 이상 10000 이하의 수로 주어진다.
- 입력으로 주어지는 K는 항상 M보다 작거나 같다.
"""

N, M, K = map(int,input().split())
# N, M, K, numbers = 5, 8, 3, [2,4,5,4,6]
# N, M, K, numbers = 5, 7, 2, [3,4,3,4,4]
numbers = list(map(int,input().split()))
numbers.sort()
result = 0

while M > 0:
    if (K<=M):
        result += K*numbers[-1]
        M -= K
        if M > 0:
            result += numbers[-2]
            M -=1
    else:
        result += M*numbers[-1]
        M=0

print(result)