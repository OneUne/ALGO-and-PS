function solution(s, skip, index) {
    let alist = [];
    let idx;
    let answer = '';
    for (let a of "abcdefghijklmnopqrstuvwxyz"){
        if(skip.includes(a)){
            continue
        } else{
            alist.push(a)
        }
    }
    alist = alist.concat(alist)
    alist = alist.concat(alist)
    for (let i of s){
        idx = alist.indexOf(i)
        answer += alist[idx+index]
    }
    return answer;
}