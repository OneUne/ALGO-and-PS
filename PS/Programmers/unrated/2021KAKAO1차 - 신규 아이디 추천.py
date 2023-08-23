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
stuff = [1, 2, 3]


""" 다른 사람들의 풀이
import re

def solution(new_id):
    st = new_id
    st = st.lower()
    st = re.sub('[^a-z0-9\-_.]', '', st)
    st = re.sub('\.+', '.', st)
    st = re.sub('^[.]|[.]$', '', st)
    st = 'a' if len(st) == 0 else st[:15]
    st = re.sub('^[.]|[.]$', '', st)
    st = st if len(st) > 2 else st + "".join([st[-1] for i in range(3-len(st))])
    return st
"""