function solution(clothes) {
    var answer = 1;
    var map = new Map();
    for (let i of clothes){
        map.set(i[1], (map.get(i[1]) || 1) + 1)
    }
    for (let [k, v] of map){
        answer *= v;
    }
    return answer-1
}