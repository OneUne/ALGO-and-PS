howmany = int(input())
elems = input().split(' ')
optimized = []

    
for i in range(howmany):
    elems[i] = int(elems[i])

elems.sort()

for i in range(howmany//2):
    optimized.append(elems[howmany-(i+1)])
    optimized.append(elems[i])
    if (i == howmany//2 - 1) & (howmany % 2 == 1):
        optimized.append(elems[i+1])

print(optimized)

sum = 0

for i in range(howmany-1):
    sum += abs(optimized[i] - optimized[i+1])

print(sum)


"""
First try : 어차피 1-19 나 19-1이나 18이라고 생각해서
그냥 제일 큰 차이가 나는 친구들 옆에 두면 된다고 생각함.

6
20 1 15 8 4 10 --> 20 1 15 4 10 8

정답 --> 62
내답 --> 52

A[0]-A[1]하고 A[1]-A[2] 이렇게 중복사용되는 부분을 사용해야 할듯.

for example
if optimized = [4, 20, 1, 15, 10, 8] --> 56
if optimized = [10, 20, 1, 15, 4, 8] --> 58

"""
