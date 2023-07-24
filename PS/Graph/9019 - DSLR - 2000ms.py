import sys
from collections import deque
input=sys.stdin.readline

mod=10000
def D(x):
    return (2*x)%mod
def S(x):
    return (x-1)%mod
def L(x):
    return (10*x+(x//1000))%mod
def R(x):
    return (x//10+(x%10)*1000)%mod

T=int(input())
while T:
    T-=1
    a=[-1]*10000
    x,y=map(int,input().split())
    a[x]=0
    q=deque([0,[x]])
    i=0
    while q and a[y]==-1:
        popped=q.popleft()
        if type(popped)==int:
            i+=1
            q.append(i)
            continue
        temp=[]
        for now in popped:
            t=D(now)
            if a[t]==-1:
                a[t]=i
                temp.append(t)
            t=S(now)
            if a[t]==-1:
                a[t]=i
                temp.append(t)
            t=L(now)
            if a[t]==-1:
                a[t]=i
                temp.append(t)
            t=R(now)
            if a[t]==-1:
                a[t]=i
                temp.append(t)
            if a[y]!=-1:
                break
        if a[y]!=-1:
            break
        q.append(temp)
    count=a[y]
    now=y
    route=[]
    while now-x:
        count-=1
        r=R(now)
        l=L(now)
        if now%2==0 and (a[now//2]==count or a[(now+10000)//2]==count):
            route.append('D')
            if a[now//2]==count:
                now//=2
            else:
                now=(now+10000)//2
        elif a[(now+1)%mod]==count:
            route.append('S')
            now=(now+1)%mod
        elif a[r]==count:
            route.append('L')
            now=r
        else:
            route.append('R')
            now=l
    for c in reversed(route):
        print(c,end='')
    print()