/*
처음에 forEach로 하고 break 가 안돼서 return false 했는데
찾는 문자가 중간에 없을 때 return -1 이 아니라 0해버리는 결과가 나옴.
그래서 그냥 for 돌려서 break 걸었더니 성공..
*/

function solution(keymap, targets) {
  var answer = [];

  for (target of targets) {
    let result = 0;
    for (t of [...target]) {
      let idxs = [];
      let idx;

      for (key of keymap) {
        idx = key.indexOf(t);
        if (idx != -1) {
          idxs.push(idx + 1);
        }
      }

      if (idxs.length > 0) {
        result += Math.min(...idxs);
      } else {
        result = -1;
        break;
      }
    }
    answer.push(result);
  }
  return answer;
}
