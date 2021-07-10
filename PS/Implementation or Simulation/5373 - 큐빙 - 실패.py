# 큐브 표현, 기준을 어떻게 잡을 것인지 정하는 게 중요.

from sys import stdin
input = stdin.readline

def cubing(side, clockwise):
    if side == 'U':
        if clockwise == '+':
            temp = [cube[4][0],cube[4][1],cube[4][2]] # 뒤쪽 큐브 첫행
            for s in range(4,1,-1):
                cube[s][0],cube[s][1],cube[s][2] = cube[s-1][0],cube[s-1][1],cube[s-1][2]
            cube[1][0],cube[1][1],cube[1][2] = temp
        else:
            temp = [cube[1][0],cube[1][1],cube[1][2]] # 왼쪽 큐브 첫행
            for s in range(1,4):
                cube[s][0],cube[s][1],cube[s][2] = cube[s+1][0],cube[s+1][1],cube[s+1][2]
            cube[4][0],cube[4][1],cube[4][2] = temp
    elif side == 'L': 
        if clockwise == '+':
            temp = [cube[4][0],cube[4][3],cube[4][6]] # 뒤쪽 큐브 첫열
            # 앗,,, Up and Down 은 쉬웠는데,, 열,, 어렵다,, 0245...
            cube[4][0],cube[4][3],cube[4][6] = cube[5][0],cube[5][3],cube[5][6]
            cube[5][0],cube[5][3],cube[5][6] = cube[2][0],cube[2][3],cube[2][6]
            cube[2][0],cube[2][3],cube[2][6] = cube[0][0],cube[0][3],cube[0][6]
            cube[0][0],cube[0][3],cube[0][6] = temp
        else:
            temp = [cube[4][0],cube[4][3],cube[4][6]] # 뒤쪽 큐브 첫열
            cube[4][0],cube[4][3],cube[4][6] = cube[0][0],cube[0][3],cube[0][6]
            cube[0][0],cube[0][3],cube[0][6] = cube[2][0],cube[2][3],cube[2][6]
            cube[2][0],cube[2][3],cube[2][6] = cube[5][0],cube[5][3],cube[5][6]
            cube[5][0],cube[5][3],cube[5][6] = temp
    elif side == 'F': # 0135
        if clockwise == '+':
            temp = cube[1][2],cube[1][5],cube[1][8]
            cube[1][2],cube[1][5],cube[1][8] = cube[5][6],cube[5][7],cube[5][8]
            cube[5][6],cube[5][7],cube[5][8] = cube[3][2],cube[3][5],cube[3][8]
            cube[3][2],cube[3][5],cube[3][8] = cube[0][6],cube[0][7],cube[0][8]
            cube[0][6],cube[0][7],cube[0][8] = temp
        else:
            temp = cube[1][2],cube[1][5],cube[1][8]
            cube[1][2],cube[1][5],cube[1][8] = cube[0][6],cube[0][7],cube[0][8]
            cube[0][6],cube[0][7],cube[0][8] = cube[3][2],cube[3][5],cube[3][8]
            cube[3][2],cube[3][5],cube[3][8] = cube[5][6],cube[5][7],cube[5][8]
            cube[5][6],cube[5][7],cube[5][8] = temp
    elif side == 'R':
        if clockwise == '+':
            temp = [cube[4][2],cube[4][5],cube[4][8]] # 뒤쪽 큐브 마지막열
            cube[4][2],cube[4][5],cube[4][8] = cube[5][2],cube[5][5],cube[5][8]
            cube[5][2],cube[5][5],cube[5][8] = cube[2][2],cube[2][5],cube[2][8]
            cube[2][2],cube[2][5],cube[2][8] = cube[0][2],cube[0][5],cube[0][8]
            cube[0][2],cube[0][5],cube[0][8] = temp
        else:
            temp = [cube[4][2],cube[4][5],cube[4][8]] # 뒤쪽 큐브 마지막열
            cube[4][2],cube[4][5],cube[4][8] = cube[0][2],cube[0][5],cube[0][8]
            cube[0][2],cube[0][5],cube[0][8] = cube[2][2],cube[2][5],cube[2][8]
            cube[2][2],cube[2][5],cube[2][8] = cube[5][2],cube[5][5],cube[5][8]
            cube[5][2],cube[5][5],cube[5][8] = temp
    elif side == 'B':
        if clockwise == '+':
            temp = cube[1][0],cube[1][3],cube[1][6]
            cube[1][0],cube[1][3],cube[1][6] = cube[5][0],cube[5][1],cube[5][2]
            cube[5][0],cube[5][1],cube[5][2] = cube[3][0],cube[3][3],cube[3][6]
            cube[3][0],cube[3][3],cube[3][6] = cube[0][0],cube[0][1],cube[0][2]
            cube[0][0],cube[0][1],cube[0][2] = temp
        else:
            temp = cube[1][0],cube[1][3],cube[1][6]
            cube[1][0],cube[1][3],cube[1][6] = cube[0][0],cube[0][1],cube[0][2]
            cube[0][0],cube[0][1],cube[0][2] = cube[3][0],cube[3][3],cube[3][6]
            cube[3][0],cube[3][3],cube[3][6] = cube[5][0],cube[5][1],cube[5][2]
            cube[5][0],cube[5][1],cube[5][2] = temp
    elif side == 'D':
        if clockwise == '+':
            temp = [cube[4][6],cube[4][7],cube[4][8]] # 뒤쪽 큐브 마지막행
            for s in range(4,1,-1):
                cube[s][6],cube[s][7],cube[s][8] = cube[s-1][6],cube[s-1][7],cube[s-1][8]
            cube[1][6],cube[1][7],cube[1][8] = temp
        else:
            temp = [cube[1][6],cube[1][7],cube[1][8]] # 왼쪽 큐브 첫행
            for s in range(1,4):
                cube[s][6],cube[s][7],cube[s][8] = cube[s+1][6],cube[s+1][7],cube[s+1][8]
            cube[4][6],cube[4][7],cube[4][8] = temp
    return cube
        

totalTC = int(input())
colors = ['w', 'g', 'r', 'b', 'o', 'y']
for _ in range(totalTC):
    # cube = [['www','www','www'],['ggg','ggg','ggg'], ['rrr','rrr','rrr'], ['bbb','bbb','bbb'], ['ooo','ooo','ooo'], ['yyy','yyy','yyy']]
    cube = [[c for _ in range(9)] for c in colors]
    turningNum = int(input())
    tc = input().split()
    for i in range(turningNum):
        cube = cubing(tc[i][0], tc[i][1])
    for i in range(9):
        print(cube[0][i],end='')
        if (i+1) % 3 == 0:
            print()
