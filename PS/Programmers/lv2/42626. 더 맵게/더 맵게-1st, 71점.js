/*
정확성 71 효율성 0
O(N log N)인데,,
*/

function solution(scoville, K) {
  var answer = 0;
  while (scoville.some((i) => i < K)) {
    // O(N)
    scoville.sort((a, b) => a - b); // O(NlogN) 병합정렬/퀵정렬, a = [21, 3, 9, 16]일 때 a.sort()는 16,21,3,9
    const mixed = scoville.shift() + scoville.shift() * 2; // O(1)
    scoville.push(mixed); // O(1)
    answer++;
  }
  return answer;
}
