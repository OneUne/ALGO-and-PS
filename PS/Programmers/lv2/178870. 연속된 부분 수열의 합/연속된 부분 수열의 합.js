/*
최소, 부분합, 부분수열, 범위 --> 투포인터 알고리즘
2중 for문 돌리면 O(N^2)이지만 투포인터 쓰면 O(N)으로 배열 순회 가능
*/

function solution(sequence, k) {
  var answer = [0, sequence.length - 1];
  let minlen = sequence.length - 1;
  let [left, sum] = [0, 0];

  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k) {
      sum -= sequence[left];
      left++;
    }

    if (sum === k && right - left < minlen) {
      answer = [left, right];
      minlen = right - left;
    }
  }
  return answer;
}
