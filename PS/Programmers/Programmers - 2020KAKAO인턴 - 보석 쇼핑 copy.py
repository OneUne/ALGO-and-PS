"""
채점 결과
정확성: 15.6
효율성: 0.0
합계: 15.6 / 100.0
"""

gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]	

def solution(gems):
    gemset = set(gems)
    left, right = 0, len(gemset)
    answer = [left+1, right]
            
    while left>=0 and right <=len(gems):
        if gemset - set(gems[left:right]) == set():
            answer = [left+1, right]
            while gemset - set(gems[left:right]) == set():
                left+=1
            answer = [left,right]
            break
        else:
            right+=1

    return answer

print(solution(gems))