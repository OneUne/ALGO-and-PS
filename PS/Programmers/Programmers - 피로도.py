from itertools import permutations as pe

k, dungeons, result = 80, [[80,20],[50,40],[30,10]], 3

def solution(k, dungeons):
    answer = -1
    cases = list(pe(dungeons))
    for case in cases:
        curp = k
        explored = 0
        for minp, consp in case:
            if minp <= curp:
                curp-=consp
                explored += 1
        if answer < explored:
            answer = explored
            
    return answer

print(solution(k, dungeons))

"""
다른 사람의 풀이 : DFS
answer = 0
N = 0
visited = []


def dfs(k, cnt, dungeons):
    global answer
    if cnt > answer:
        answer = cnt

    for j in range(N):
        if k >= dungeons[j][0] and not visited[j]:
            visited[j] = 1
            dfs(k - dungeons[j][1], cnt + 1, dungeons)
            visited[j] = 0


def solution(k, dungeons):
    global N, visited
    N = len(dungeons)
    visited = [0] * N
    dfs(k, 0, dungeons)
    return answer
"""