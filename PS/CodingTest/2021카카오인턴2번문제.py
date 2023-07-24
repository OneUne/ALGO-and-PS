from itertools import combinations

def solution(places):
    result = []
    for i in places:
        positionP =[]
        positionX = []
        px, py = 0, 0
        for j in i :
            for _ in j:
                if _ == 'P':
                    positionP.append((px,py))
                elif _ == 'X':
                    positionX.append((px,py))
                py+=1
            px+=1
            py=0
        comb = list(combinations(positionP,2))
        count=0
        for p in comb:
            x1,x2 = p[0][0],p[1][0]
            y1,y2 = p[0][1], p[1][1]
            if abs((x1-x2)) + abs((y1-y2)) <= 2 :
                if x1 == x2 and (x1, int((y1+y2)/2)) not in positionX:
                    count+=1
                if y1 == y2 and (int((x1+x2)/2),y1) not in positionX:
                    count+=1
                elif x1 != x2 and y1 != y2:
                    if (x1,y2) not in positionX or (x2,y1) not in positionX:
                        count+=1
        if count == 0:
            result.append(1)
        else:
            result.append(0)
        
    return result


[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPXX", "OXXXP", "POOXX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]	[1, 0, 1, 1, 1]