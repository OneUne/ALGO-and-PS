howmany = int(input())
elems = list(map(int, input().split()))

"""
https://www.youtube.com/watch?v=edlDaLrfVbA
"""

def perm(lst,n):
    if n == len(lst) - 1:
        print(lst)
    else :
        for j in range(n, len(lst)):
            lst[n], lst[j] = lst[j], lst[n]
            perm(lst, n+1)
            lst[n], lst[j] = lst[j], lst[n]
    

perms = perm(elems, 0)