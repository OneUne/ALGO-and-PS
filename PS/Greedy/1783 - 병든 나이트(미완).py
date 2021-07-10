height, width = map(int, input().split())
pos_h, pos_w = 0, 0
directions = [(2,1), (1,2), (-1,2), (-2,2)]

visited = 1

while True:
    check = visited
    for h,w in directions:
        if (0 <= pos_h+h < height) and (pos_w+w < width):
            pos_h += h
            pos_w += w
            visited +=1
    if visited == check:
        break

print(visited)