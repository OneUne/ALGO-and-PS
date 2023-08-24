function solution(sequence, k) {
    var answer = [0, sequence.length-1];
    let minlen = sequence.length-1;
    let [left, sum] = [0, 0]
    
    for(let right=0; right<sequence.length; right++){
        sum += sequence[right]

        while(sum>k){
            sum -= sequence[left]
            left++
        }
        
        if(sum===k && right-left < minlen){
            answer = [left, right]
            minlen = right-left
        }
    }
    return answer;
}