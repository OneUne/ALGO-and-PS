function solution(cards1, cards2, goal) {
    var answer = '';
    for (let i of goal){
        if(cards1[0] === i){
            cards1.splice(0,1)
        }
        else if(cards2[0] === i){
            cards2.splice(0,1)
        }
        else{
            return 'No'
        }
    }
    answer = 'Yes';
    return answer;
}