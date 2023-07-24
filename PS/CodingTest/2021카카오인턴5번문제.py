from collections import deque

def solution(k, num, links):
    if k==1:
        return sum(num)
    elif k == len(num):
        return max(num)
    else:
        answer = []
        limit = int(sum(num)/k)
        graph = [[] * len(num) for _ in range(len(num))]
        for i in range(len(links)):
            if links[i] != [-1,-1]:
                if links[i][0] != -1:                
                    graph[i].append(links[i][0])
                    graph[links[i][0]].append(i)
                if links[i][1] != -1:
                    graph[i].append(links[i][1])
                    graph[links[i][1]].append(i)
        q = deque()
        visit = [0] * len(num)
        curanswer = 0
        for i in range(len(num)):
            if visit[i] == 0:
                visit[i] = 1
                q.append(i)
                curanswer += num[i]
                if curanswer > limit:
                    answer.append(curanswer)
                    curanswer = 0
                    continue
                while q:
                    now = q.popleft()
                    for j in graph[now]:
                        if visit[j] == 0:
                            visit[j] = 1
                            curanswer += num[j]
                            if curanswer > limit:
                                answer.append(curanswer)
                                curanswer = 0
                                break
                            q.append(j)
        return max(answer)

3	[12, 30, 1, 8, 8, 6, 20, 7, 5, 10, 4, 1]	[[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 5], [2, 10], [3, 0], [6, 1], [11, -1], [7, 4], [-1, -1], [-1, -1]]	40
1	[6, 9, 7, 5]	[[-1, -1], [-1, -1], [-1, 0], [2, 1]]	27
2	[6, 9, 7, 5]	[[-1, -1], [-1, -1], [-1, 0], [2, 1]]	14
4	[6, 9, 7, 5]	[[-1, -1], [-1, -1], [-1, 0], [2, 1]]	9