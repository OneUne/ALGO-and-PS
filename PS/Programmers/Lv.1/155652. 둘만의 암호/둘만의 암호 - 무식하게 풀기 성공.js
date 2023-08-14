function solution(s, skip, index) {
  let alist = [];
  let idx;
  let answer = "";
  for (let a of "abcdefghijklmnopqrstuvwxyz") {
    if (skip.includes(a)) {
      continue;
    } else {
      alist.push(a);
    }
  }
  alist = alist.concat(alist);
  alist = alist.concat(alist);
  // index가 20이고 전체 알파벳 개수가 26개니까 한 바퀴 도는 게 최대일 거라고 생각했는데, skip이 10이니까. 16개라면 한바퀴돌고도 또 돌 수도 있는 거였음.
  for (let i of s) {
    idx = alist.indexOf(i);
    answer += alist[idx + index];
  }
  return answer;
}
