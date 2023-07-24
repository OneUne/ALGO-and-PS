"""
문제
10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다. 이 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중, 가장 짧은 것의 길이를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (10 ≤ N < 100,000)과 S (0 < S ≤ 100,000,000)가 주어진다. 둘째 줄에는 수열이 주어진다. 수열의 각 원소는 공백으로 구분되어져 있으며, 10,000이하의 자연수이다.

출력
첫째 줄에 구하고자 하는 최소의 길이를 출력한다. 만일 그러한 합을 만드는 것이 불가능하다면 0을 출력하면 된다.
"""

"""
투포인터 알고리즘
- 인덱스를 가리키는 두 개의 변수(포인터)를 선언하여 사용
- 주로 배열 안에 있는 값들을 연속해서 더하거나 연산하는 경우에 사용
- [5,1,3,5,10]이면 5+1+3이런식으로가다가 S넘으면 왼쪽부터 빼면서 1+3 이렇게 쭉 가서 제일 작은 minlen 찾는 코드
"""

import sys

input = sys.stdin.readline
N, S = map(int, input().split())
nums = list(map(int, input().split()))

# 안정적인 방법 : 맨 아래 주석
if sum(nums) < S :
    print(0)

else :
    patialsum = nums[0]
    minlen = sys.maxsize
    end = 1
    for start in range(N):
        while patialsum < S and end < N:
            patialsum += nums[end]
            end += 1
        if patialsum >= S:
            minlen = min(minlen, end - start)
            if minlen == 1: # 2인줄알았는데 그건 틀렸습니다^^
                break
        patialsum -= nums[start]
    print(minlen)

"""
    if minlen == sys.maxsize:
        print(0)
    else:
        print(minlen)
"""
    