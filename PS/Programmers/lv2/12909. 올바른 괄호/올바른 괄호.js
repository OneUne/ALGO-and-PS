function solution(s){
    var answer = true;
    var [left, right] = [0,0];
    
    for(let i of s){
        if(right > left){
            answer = false;
            break;
        }
        if (i === "(") left++
        else right++
    }
    if (right !== left){
        answer = false;
    }

    return answer;
}