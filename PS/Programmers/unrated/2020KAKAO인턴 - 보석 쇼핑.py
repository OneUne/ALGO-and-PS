# 실행 시간이 10.0초를 초과하여 실행이 중단되었습니다. 실행 시간이 더 짧은 다른 방법을 찾아보세요.

gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]	

def solution(gems):
    gemset = set(gems)
    left, right = 0, len(gems)
    answer = [left+1, right]
    flag = True
    
    while flag:
        right-=1
        if set(gems[left:right]) - gemset == set():
            answer = [left+1, right+1]
        else:
            right+=1
            left +=1
            if set(gems[left:right]) - gemset == set():
                answer = [left+1, right+1]
            else:
                flag = False

    return answer

print(solution(gems))