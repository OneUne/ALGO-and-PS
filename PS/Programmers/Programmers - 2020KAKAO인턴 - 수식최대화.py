import re

def calc(d,r,sign):
    for i in r:
        if r[i] == sign:
            d = d[:i*2]+[eval(d[i*2]+sign+d[i*2+2])]
            r.remove(sign)
    return d, r

def solution(expression):
    answer = 0
    operand = re.compile('[\d]*').findall(expression)
    operator = re.compile('[\D]').findall(expression)
    
    return answer