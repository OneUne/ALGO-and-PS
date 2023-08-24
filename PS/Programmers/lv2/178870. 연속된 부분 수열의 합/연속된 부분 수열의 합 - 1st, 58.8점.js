function solution(sequence, k) {
  var answer = [];
  for (let i = 0; i < sequence.length; i++) {
    let sum = sequence[i];
    if (sum === k) {
      answer = [i, i];
      break;
    }
    for (let j = i + 1; j < sequence.length; j++) {
      sum += sequence[j];
      if (sum > k) break;
      else if (sum === k) {
        if (answer.length === 0) {
          answer = [i, j];
        } else {
          answer = answer[1] - answer[0] <= j - i ? answer : [i, j];
        }
      }
    }
  }
  return answer;
}
