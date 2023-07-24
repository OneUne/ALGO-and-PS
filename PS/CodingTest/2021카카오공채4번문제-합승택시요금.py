#n,s,a,b,fares,result = 6,4,6,2,[[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]],82
# n,s,a,b,fares,result = 7,3,4,1,[[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]],14
n,s,a,b,fares,result = 6,4,5,6,[[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]],18
"""
def solution(n, s, a, b, fares):
    INF = float('inf')
    graph = [[INF] * (n+1) for _ in range(n+1)]
    
    for i in range(n+1):
        graph[i][i] = 0 
        
    for i in fares:
        graph[i[0]][i[1]] = i[2]
        graph[i[1]][i[0]] = i[2]
    
    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
    
    answer = INF
    return answer
"""
from math import inf

def solution(n, s, a, b, fares):
    graph = [[inf] * (n+1) for _ in range(n+1)]
    
    for i in range(n+1):
        graph[i][i] = 0 
        
    for i in fares:
        graph[i[0]][i[1]] = i[2]
        graph[i[1]][i[0]] = i[2]
    
    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
    
    answer = inf
    
    for t in range(n):
        temp = graph[s][t] + graph[t][a] + graph[t][b]
        answer = min(answer,temp)  
    
    return answer

print(solution(n,s,a,b,fares))

"""
from math import inf

def solution(n, s, a, b, fares):
    graph = [[inf] * (n) for _ in range(n)]
    
    for i in range(n):
        graph[i][i] = 0 
        
    for i in fares:
        graph[i[0]-1][i[1]-1] = i[2]
        graph[i[1]-1][i[0]-1] = i[2]
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if graph[i][j] > graph[i][k] + graph[k][j]:
                    graph[i][j] = graph[i][k] + graph[k][j]
    
    answer = inf
    
    for t in range(n):
        temp = graph[s-1][t] + graph[t][a-1] + graph[t][b-1]
        answer = min(answer,temp)  
    
    return answer
"""