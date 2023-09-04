// @  - , - , - , 김규화 외 212 명
// progresses 배열을 순회하면서 작업 진도를 계산하는 대신, 작업이 완료될 때까지 걸리는 일 수를 먼저 계산해 불필요한 반복 제거

function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
