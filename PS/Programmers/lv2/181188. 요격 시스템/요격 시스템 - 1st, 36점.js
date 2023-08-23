/*
흠 어떻게 풀어야 되는지 아예 모르겠음.
느낌은, 일단 s 순서대로 정렬한 다음 하나의 끝 부분에서 하면 되지 않을까.. 싶은데
--> 는 36.4점 
반례 :
targets = [
  [1, 15],
  [2, 3],
  [3, 9],
  [4, 7],
];
*/

function solution(targets) {
  var answer = 1;

  targets.sort(function (a, b) {
    return a[0] - b[0];
  });

  var cp = targets[0][1] - 1;

  targets.forEach((v) => {
    if (v[0] > cp) {
      cp = v[1] - 1;
      answer++;
    }
  });

  return answer;
}
