import math

n, k, result = 437674,3,3
# n,k,result = 110011,10,2

def isPrime(x):
    for i in range(2, int(math.sqrt(x))+1):
        if x % i == 0:
            return False
    return True

# def isPrime(number):
#     numbers = [True] * (number + 1)
#     answer = 0

#     for num in range(2,int(math.sqrt(number))+1):
#         if numbers[num] == False:
#             continue;

#         for i in range(num+num,number+1,num):
#             numbers[i] = False

#     for i in range(2,number+1):
#         if numbers[i] == True:
#             answer+=1

#     return answer


def solution(n, k):
    knary = ''
    answer = 0
    
    while n:
        knary += str(n%k)
        n = n//k
    knary=knary[::-1]
    knary = knary.split('0')
    for i in knary:
        if i == '':
            continue
        if i != '1' and isPrime(int(i)):
            answer+=1

    return answer

print(solution(n,k))