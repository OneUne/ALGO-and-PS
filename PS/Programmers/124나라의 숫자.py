def solution(n):
    if n<=3:
        return '124'[n-1]
    else:
        # n-1이 keypoint! 0,1,2가 아닌 1,2,3(-->4)의 3진법을 사용할 거라.
        q, r = divmod(n-1, 3)
        return solution(q) + '124'[r]