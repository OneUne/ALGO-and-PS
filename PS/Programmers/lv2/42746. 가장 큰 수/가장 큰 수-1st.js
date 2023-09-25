/*
이렇게하면 [3, 30, 34, 5, 9] 일 때 "9534330"이 아닌 "9534303"이 나옴
그러면 3이 30,31,32보다는 크다는건뎅
*/
function solution(numbers) {
  let answer = "";
  numbers.sort();
  for (let i = numbers.length - 1; i > -1; i--) {
    answer += numbers[i];
  }
  return answer;
}
