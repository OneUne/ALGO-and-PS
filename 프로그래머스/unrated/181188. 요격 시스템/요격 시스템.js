/*
차라리 targets의 길이에서 뒤로 갈수록 겹치는 게 있으면 하나씩 빼볼까..
아니다 겹치는 구간 구해서 나아가는 게 나을지도?
*/

function solution(targets) {
    targets.sort((a, b) => a[0] - b[0]);

    let answer = targets.reduce((count, [start, end]) => {
        if (start < count.end) {
            count.end = Math.min(count.end, end);
        } else {
            count.end = end;
            count.total++;
        }
        return count;
    }, { end: -Infinity, total: 0 });

    return answer.total;
}
