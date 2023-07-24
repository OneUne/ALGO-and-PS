# n,info, result = 5,[2,1,1,1,0,0,0,0,0,0,0],[0,2,2,0,1,0,0,0,0,0,0]
# n,info, result = 1,[1,0,0,0,0,0,0,0,0,0,0],[-1]
n,info, result = 9,[0,0,1,2,0,1,1,1,1,1,1],[1,1,2,0,1,2,2,0,0,0,0]
# n,info, result = 10,[0,0,0,0,0,0,0,0,3,4,3],[1,1,1,1,1,1,1,1,0,0,2]

def solution(n, info):
    flag=True
    answer = []
    max = 0

    while flag:
        for i in range(10):
            left = n
            apeach = info.copy()
            ryan = [0]*11
            for j in range(i, 10):
                if left == 0 :
                    break
                if info[j]+1 <= left:
                    ryan[j] = info[j]+1
                    left -= info[j]+1
                    apeach[j] = 0
            if left > 0:
                lastidx = ryan.index(0)-1
                left += ryan[lastidx]
                ryan[lastidx] = 0
                apeach[lastidx] = info[lastidx]
                for j in range(lastidx+1, 10):
                    if left == 0 :
                        break
                    if info[j]+1 <= left:
                        ryan[j] = info[j]+1
                        left -= info[j]+1
                        apeach[j] = 0
            asum = sum([(10-a) if apeach[a]!=0 else 0 for a in range(10)])
            rsum = sum([(10-r) if ryan[r]!=0 else 0 for r in range(10)])
            if (rsum-asum) >= max:
                max = rsum-asum
                answer.append(ryan)
            else:
                flag = False
                break
    
    if len(answer)>0:
        return answer[-1]
    else:
        return [-1]

print(solution(n,info))