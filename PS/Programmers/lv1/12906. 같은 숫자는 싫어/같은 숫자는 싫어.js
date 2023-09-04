// 첨에 걍 Splice했는데 O(N)이라 시간초과 났음

function solution(arr)
{
    var answer = [arr[0]];
    
    for(let i=1; i<arr.length; i++){
        if(arr[i] !== arr[i-1]) answer.push(arr[i])
    }

    return answer
}