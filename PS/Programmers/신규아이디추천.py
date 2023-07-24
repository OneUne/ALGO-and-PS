import re
def solution(new_id):
    #1단계
    answer = new_id.lower()
    #2단계
    p = re.compile('[~|!|@|#|$|%|\^|&|*|(|)|=|+|[|{|\]|}|:|?|,|<|>|/]')
    answer = p.sub('', answer)
    #3단계
    p = re.compile('[.]{2,}')
    answer = p.sub('.', answer)
    #4단계
    p = re.compile('^[.]|[.]$')
    answer = p.sub('', answer)
    #5단계
    if answer == '' : answer ="a"
    #6단계
    answer = answer[:15]
    answer = p.sub('', answer)
    #7단계
    if len(answer) < 3:
        while(len(answer)<3): answer+=answer[-1]
    return answer
