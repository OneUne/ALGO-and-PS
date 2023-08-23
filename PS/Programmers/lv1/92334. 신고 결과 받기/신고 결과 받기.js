/*
필요한 자료구조?
- 일단 report 중복 인정 안 하니까 set 처리하고 --> new Set();
- 각 user가 신고한 사람들을 어떻게 관리할 것인가. --> map 두 개 만들어서 하나는 신고자, 하나는 신고당한 횟수 이렇게?

*/

function solution(id_list, report, k) {
    var answer = [];
    const reportSet = new Set(report);
    var reportMap = {};
    var reportNum = {};
    
    for(let i of reportSet){
        const [reporter, reportee] = i.split(' ')
        
        if(!reportMap[reporter]) reportMap[reporter] = reportee;
        else reportMap[reporter] += ' '+reportee
        
        if(!reportNum[reportee]) reportNum[reportee] = 1;
        else reportNum[reportee]++;
        
    }
    
    for (let i of id_list){
        if(!reportMap[i]){
            answer.push(0);
        } else{
            var blockNum = 0;
            reportMap[i].split(' ').map((v)=>{
                if(reportNum[v]>=k){
                    blockNum++;
                }
            })
            answer.push(blockNum);
        }
    }
    
    return answer;
}