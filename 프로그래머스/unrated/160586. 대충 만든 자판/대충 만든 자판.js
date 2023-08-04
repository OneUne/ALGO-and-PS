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