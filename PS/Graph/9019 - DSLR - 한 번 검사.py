from collections import deque
 
def BFS():
    queue = deque([(before, '')]) #(before,'')를 원소로 갖는 리스트를 queue에 넣어 생성 ''는 경로
    visited[before] = 1           # 어떤 수로 변화하고 싶은 거니까 before는 탐색 불필요.
 
    while queue:
        curnum, route = queue.popleft() 
        if curnum == after:
            return route
 
        digit = len(str(curnum))

        #D
        t = (curnum*2)%limit
        if not visited[t]:
            visited[t] = 1
            queue.append((t, route + 'D'))

        #S  
        t = (curnum-1)%limit # (0-1) % 10000 = 9999
        if not visited[t]:
            visited[t] = 1
            queue.append((t, route + 'S'))

        #L
        if digit < 4:
            t = curnum*10 # 세자릿수 이하일 때 왼쪽으로 한 칸 == *10
        else:
            t, d = divmod(curnum, 1000) # 1234일 때 t = 1, d = 234
            t += (d*10) # 2341
        if not visited[t]:
            visited[t] = 1
            queue.append((t, route + 'L'))

        #R
        if digit == 1:
            t = curnum*1000
        else:
            t, d = divmod(curnum, 10)   # 1234일 때 t = 123, d = 4
            t += (d*1000) # 4123
        if not visited[t]:
            visited[t] = 1
            queue.append((t, route + 'R'))
        
 
testcases = int(input())
limit = 10000 # 0~9999
for t in range(testcases):
    before, after = map(int, input().split())
    visited = [0]*limit
    print(BFS())


