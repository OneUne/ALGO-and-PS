// 원의 방정식 (x-a)^2 + (y-b)^2 = r^2 여기서 a, b는 0이라 치고 y 구하기

function solution(r1, r2) {
  let count = 0;

  for (let x = 1; x <= r2; x++) {
    let y1 = r1 > x ? Math.sqrt(r1 * r1 - x * x) : 0; // 안쪽 원의 y좌표
    let y2 = Math.sqrt(r2 * r2 - x * x); // 바깥쪽 원의 y좌표
    count += Math.floor(y2) - Math.ceil(y1) + 1; // y1부터 y2까지의 정수 좌표 개수
  }

  return count * 4; // 사분면 대칭을 고려하여 네 배로 계산
}
