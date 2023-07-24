def solution(n, k, cmd):
    orgn = n
    answer = ''
    delist = []
    for i in cmd:
        if i[0]=='D':
            k += int(i[2])
            k = min(k, n-1)
        elif i[0] == 'U':
            k -= int(i[2])
            k = max(k,0)
        elif i[0] == 'C':
            cnt = 0
            for d in delist:
                if d < k:
                    cnt+=1
            delist.append(k+cnt)
            n-=1
            if k == n:
                k-=1
        elif i[0] == 'Z':
            tempk = delist.pop()
            if tempk < k:
                k+=1
            n+=1
    for _ in range(orgn):
        if _ in delist:
            answer += 'X'
        else:
            answer += 'O'
    return answer

8	2	["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]	"OOOOXOOO"
8	2	["D 2","C","U 3","C","D 4","C","U 2","Z","Z","U 1","C"]	"OOXOXOOO"