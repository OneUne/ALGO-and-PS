function solution(operations) {
    var answer = [];
    operations.map((v)=>{
        let [op, data] = v.split(" ");
        if(op === "I"){
            answer.push(parseInt(data))
            answer.sort((a,b)=>a-b)
        } else{
            if(answer.length > 0){
                if(data === "-1") answer.shift();
                else answer.pop();
            }
        }
    })
    return answer.length === 0 ? [0,0] : [Math.max(...answer),Math.min(...answer)];
}