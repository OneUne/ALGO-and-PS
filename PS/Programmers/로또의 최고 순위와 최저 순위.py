def solution(lottos, win_nums):
    intersect = set(lottos) & set(win_nums)
    min_num = len(intersect)
    
    if min_num in [6,5,4] :
        rank = 7 % min_num
    elif min_num == 3 :
        rank = 4
    elif min_num == 2 :
        rank = 5
    else :
        rank = 6
    
    zero_num = lottos.count(0)
    answer = []
    if (rank-zero_num == 0 ) :
        answer.append(1)
    else:
        answer.append(rank-zero_num)
    answer.append(rank)
    return answer