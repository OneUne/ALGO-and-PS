function solution(n, m, section) {
    var answer = 0;
    var current = 0;

    for(let s of section){
        if (current < s){
            current = s+m-1;
            // current += m 했었는데 80점. 반례 n은 5, m은 2, section은 [1,4,5]일 때.
            answer += 1
        }
    }
    return answer;
}