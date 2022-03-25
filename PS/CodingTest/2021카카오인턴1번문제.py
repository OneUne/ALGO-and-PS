def solution(s):
    engtonum = {'one':'1', 'two':'2', 'three':'3', 'four':'4', 'five':'5', 'six':'6', 'seven':'7', 'eight':'8', 'nine':'9', 'zero':'0'}
    for i in engtonum.keys():
        if i in s:
            s = s.replace(i, engtonum[i])
    return int(s)




"one4seveneight"	1478
"23four5six7"	234567
"2three45sixseven"	234567
"123"	123