#m, musicinfos, answer = "ABCDEFG",["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"],"HELLO"
m, musicinfos, answer = "CC#BCC#BCC#BCC#B",["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"],"FOO"
# m, musicinfos, answer = "ABC",["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"],"WORLD"

def changeSharp(melody):
    melody = melody.replace('C#', 'c')
    melody = melody.replace('D#', 'd')
    melody = melody.replace('F#', 'f')
    melody = melody.replace('G#', 'g')
    melody = melody.replace('A#', 'a')    
    return melody 

def solution(m, musicinfos):
    m = changeSharp(m)
    answer = ('(None)',None)
    for i in musicinfos:
        i = i.split(',')
        mins = (int(i[1][:2])-int(i[0][:2]))*60 + int(i[1][3:])-int(i[0][3:])
        i[-1] = changeSharp(i[-1])
        if m in (i[-1]*(mins//len(i[-1])+1))[:mins]:
            if (answer[1] == None) or mins > answer[1]:
                answer = (i[2],mins)
    return answer[0]




"""
https://json1995.tistory.com/entry/Python%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4Level-2-%EB%B0%A9%EA%B8%88%EA%B7%B8%EA%B3%A1
def solution(m, musicinfos):
    m = change(m)
    answer = ('(None)', None)
    for info in musicinfos:
        start, end, title, melody = info.split(',')
        start_h, start_m, end_h, end_m = map(int, start.split(':') + end.split(':'))
        time = 60*(end_h-start_h) + (end_m-start_m)
        melody = change(melody)
        melody_played = (melody*time)[:time]
        if m in melody_played:
            if (answer[1] == None) or (time > answer[1]):
                answer = (title, time)
    return answer[0]
"""