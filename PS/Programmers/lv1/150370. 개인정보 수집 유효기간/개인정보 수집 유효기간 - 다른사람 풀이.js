/*
@hyunmo, gbwlxhd97

1. 그냥 함수 하나 쓰는 거면 map((v)=>{Number(v)}) 이렇게 안쓰고 map(Number)해도 되는 거군..
2. 변수 여러 개 할당 배열 = map
3. 왜 <= 인가 했는데, dates가 원래대로라면 -1 하고 dates < todates 여야 파기니까.
4. unix같은 느낌이 비교하기엔 편하겠군 ~_~ 컴퓨팅사고~

*/

function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
