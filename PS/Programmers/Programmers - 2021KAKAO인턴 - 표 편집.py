"""
TC 30개 중 5개 통과.. 효율성은.. 시간초과..런타임에러..기타등등..
채점 결과
정확성: 8.0
효율성: 0.0
합계: 8.0 / 100.0
"""

n = 8
k = 2
cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]	

modified = [i for i in range(n)]
trash = []
answer = ''

for c in cmd:
    if c[0] == "U":
        k -= int(c[2])
    elif c[0] == "D":
        k += int(c[2])
    elif c[0] == "C":
        trash.append(modified.pop(k))
        if k == len(modified):
            k -= 1
    elif c[0] == "Z":
        z = trash.pop()
        modified.insert(z, z)
        if z <= k: k+=1

# i = 0
# while i < n:
#     for m in modified:
#         if m == i :
#             answer += 'O'
#         elif m > i :
#             while m > i:
#                 answer +='X'
#                 i += 1
#             answer += 'O'
#         i+=1
# if len(answer) < (n-1):
#     answer = answer+'X'*(len(answer)-(n-1))
    answer = ['O']*n
    for t in trash:
        answer[t] = 'X'
    answer = "".join(answer)
    