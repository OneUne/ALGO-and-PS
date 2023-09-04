function solution(progresses, speeds) {
    var answer = [];
    var feature = 0;
    
    while(progresses.length > 0){
        if(progresses[0]>=100){
            feature++;
            progresses.shift()
            speeds.shift()
            continue
        } else{
            if(feature > 0){
                answer.push(feature)
                feature = 0;
            }
            progresses.forEach((v,i)=>{
                progresses[i] += speeds[i]
            })
        }
    }
    
    answer.push(feature)

    return answer;
}