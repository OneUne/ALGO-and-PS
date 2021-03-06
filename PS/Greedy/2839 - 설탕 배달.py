"""
입력값 : 배달할 kg 수 = N (3 ≤ N ≤ 5000)
출력값 : 3kg, 5kg 봉지 개수의 합. 딱 안 떨어지면 -1 출력

주의할 점
- 무조건 5kg부터 덜어도 안 됨. 6같은 경우 3으로 해결 가능하니까
- 그렇다고 3kg씩 덜어도 안 됨. 11은 5,3,3 가능. 13도 5,5,3. --> 도 사실은 3,3,5고 3,5,5 였던 거임.
- 5를 덜어보고 3,5로 나누어 떨어지면 5를, 3을 덜어보고 나누어떨어지면 3을 빼는 거 해봤는데 16에서 걸림. 
--> 그럼 3을 계속 덜어보면 됨.

"""
# import sys
# input = sys.stdin.readline
# 오히려 느리니까 무조건 import sys안 해도 될 듯.
N = int(input())
# Nli = [18,4,6,9,11]
# Nli = [4,5,6,7,8,9,10,11,12,13,14,15,16,17]
# result = [-1, 1, 2, -1, 2, 3, 2, 3, 4, 3, 4, 3, 4, 5] --> DP로도 가능할 듯.
# for N in Nli:
result = 0
while N>0:
    if (N%5 == 0):
        result += N//5
        break
    else:
        N-=3
        result += 1
print(-1 if N<0 else result)