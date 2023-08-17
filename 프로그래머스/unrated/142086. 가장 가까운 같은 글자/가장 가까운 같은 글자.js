function solution(s) {
    var answer = [];
    let smap = {};
    
    [...s].forEach((v,i)=>{
        if(!smap[v]){
            answer.push(-1)
        } else{
            answer.push(i+1 - smap[v])
        }
        smap[v] = i+1
    })
    
    return answer;
}