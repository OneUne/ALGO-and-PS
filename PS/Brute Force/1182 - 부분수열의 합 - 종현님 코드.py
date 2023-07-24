
# sub, subset은 처음엔 빈 리스트. level_now도 처음엔 0 max만 원래수열길이
# sub를 바꿔가면서 subset에 sub를 그때그때 추가하는 함수
"""
Max가 5일 때 [[0], [0, 1], [0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3, 4], [0, 1, 2, 4], [0, 1, 3], [0, 1, 3, 4], [0, 1, 4], [0, 2], [0, 2, 3], [0, 2, 3, 4], [0, 2, 4], [0, 3], [0, 3, 4], [0, 4], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 4], [1, 3], [1, 3, 4], [1, 4], [2], [2, 3], [2, 3, 4], [2, 4], [3], [3, 4], [4]] 
--> 규칙 : 01234 하나씩 다 넣고, n-1째 자리부터 0124, 그다음엔 013, 그다음엔 014, 그다음엔 02, … 
          그러니까 now가 0일 때 1234, 거기서 또 234, 34, 4 하고 1일 때 234, 2일 때 34같은 느낌
"""

def make_subseq(sub, subset, level_max, level_now):
    subset.append(sub[:])
    
    for i in range(level_now, level_max):
        sub.append(i)
        make_subseq(sub,subset,level_max,i+1)
        sub.pop(len(sub)-1)

# make_subseq([],[],3,0)

n,s=map(int, input().split(" ")) #1 ≤ N ≤ 20, |S| ≤ 1,000,000
seq=list(map(int,input().split(" ")))

sub=[]
subset=[]

make_subseq(sub, subset, n, 0)

subset=subset[1:]       #맨 앞에는 크기가 0인 부분수열이 있으므로
print(subset)
count=0
for i in subset:
    sum=0
    for j in i:
        sum+=seq[j]
    if sum==s:
        count+=1
        
print(count)