from itertools import combinations

def solution(orders, course):
    answer = []
    for c in course:
        comb = []
        dic = {}
        for o in orders:
            for cb in combinations(o, c):
                comb.append("".join(sorted(list(cb))))
        for cb in comb:
            if cb in dic:
                dic[cb] += 1
            else:
                dic[cb] = 1
        if len(dic) > 0 :
            maxval = max(dic.values())
            if maxval > 1 :
                for k in dic:
                    if dic[k] == maxval:
                        answer.append(k)
    answer.sort()
    return answer

""" 다른 사람들의 풀이
from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    for c in course:
        temp = []
        for order in orders:
            combi = combinations(sorted(order), c)
            temp += combi
        counter = Counter(temp)
        if len(counter) != 0 and max(counter.values()) != 1:
            answer += [''.join(f) for f in counter if counter[f] == max(counter.values())]

    return sorted(answer)

import collections
import itertools

def solution(orders, course):
    result = []

    for course_size in course:
        order_combinations = []
        for order in orders:
            order_combinations += itertools.combinations(sorted(order), course_size)

        most_ordered = collections.Counter(order_combinations).most_common()
        result += [ k for k, v in most_ordered if v > 1 and v == most_ordered[0][1] ]

    return [ ''.join(v) for v in sorted(result) ]
"""