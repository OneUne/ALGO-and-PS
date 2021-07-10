from itertools import permutations

def D(n):
    return (2*n) % 10000

def S(n):
    if n == 0:
        return 9999
    return n-1

def IntToList4elems(n):
    res = [int(x) for x in str(n)]

    if n < 10 :
        res = [0, 0, 0]+res
    elif n < 100 :
        res = [0, 0] + res
    elif n < 1000 :
        res = [0] + res

    return res

def StrToInt(res):
    res = [str(x) for x in res]
    res = int(str(res[0]+res[1]+res[2]+res[3]))
    return res

def L(n): 
    res = IntToList4elems(n)
    res.append(res[0])
    del res[0]
    res = StrToInt(res)

    return res

def R(n):
    res = IntToList4elems(n)
    res = [res[3]]+res
    del res[0]
    res = StrToInt(res)

    return res

testcases = int(input())
before,result = [], []
for i in range(testcases):
    line = input().split()
    before.append(int(line[0]))
    result.append(int(line[1]))

for i in range(testcases):
    after = [x for x in before]
    ntopick = 1
    breaker = False
    while breaker == False:
        routes = list(permutations('DSLR',ntopick)) #[('D',), ('S',), ('L',), ('R',)] 내가 x = (1) 하면 그냥 1 x = (1,)해야 튜플
        if ntopick > 1 :
            routes = routes + [tuple(x*ntopick) for x in 'DSLR']
        for r in routes:
            for rs in r:
                if rs == 'D':
                    after[i] = D(after[i])
                elif rs == 'S':
                    after[i] = S(after[i])
                elif rs == 'L':
                    after[i] = L(after[i])
                elif rs == 'R':
                    after[i] = R(after[i])
            if after[i] == result[i]:
                shortcut = ''
                for s in r:
                    shortcut += s
                print(shortcut)
                breaker = True
                break
            else:
                after = [x for x in before]
        ntopick += 1

