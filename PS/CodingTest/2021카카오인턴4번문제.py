def solution(n, start, end, roads, traps):
    answer = 0
    direct = 1
    for i in roads:
        curpos = i[direct]
        answer += i[2]
        if curpos == end :
            break
        elif curpos in traps:
            direct = 0
    return answer
    
3	1	3	[[1, 2, 2], [3, 2, 3]]	[2]	5
4	1	4	[[1, 2, 1], [3, 2, 1], [2, 4, 1]]	[2, 3]	4