def solution(answers):
    
    p1 = [1,2,3,4,5] * 2000
    p2 = [2,1,2,3,2,4,2,5] * 1250
    p3 = [3,3,1,1,2,2,4,4,5,5] * 1000
    score = [0, 0, 0]
    
    for i,j,k,l in zip(p1, p2, p3, answers):
        if i == l : score[0] +=1
        if j == l : score[1] +=1
        if k == l : score[2] +=1

    hs = max(score)
    answer = []
    for i, s in enumerate(score):
        if s == max(score):
            answer.append(i+1)
    
    return answer