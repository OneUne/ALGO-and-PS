/*
차라리 targets의 길이에서 뒤로 갈수록 겹치는 게 있으면 하나씩 빼볼까..
아니다 겹치는 구간 구해서 나아가는 게 나을지도?
*/

function solution(targets) {
    var answer = 1;
    
    targets.sort(function(a,b){
        return a[0]-b[0]
    })
    
    var cp = targets[0]
    
    targets.forEach((v)=>{
        if(v[0]<cp[1]){
            cp = [v[0], Math.min(cp[1],v[1])]
        } else{
            cp = v;
            answer++;
        }
    })
    
    return answer;
}