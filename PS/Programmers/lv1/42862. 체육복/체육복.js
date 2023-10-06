// indexOf 안쓰고 includes 써서 !lost.includes(v) 이렇게도 가넝

function solution(n, lost, reserve) {
  var answer = n;

  // 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
  let newLost = lost.filter((v) => reserve.indexOf(v) == -1);
  reserve = reserve.filter((v) => lost.indexOf(v) == -1);

  newLost
    .sort((a, b) => a - b)
    .forEach((v) => {
      let [before, after] = [reserve.indexOf(v - 1), reserve.indexOf(v + 1)];
      if (before != -1) reserve.splice(before, 1);
      else if (after != -1) reserve.splice(after, 1);
      else answer--;
    });

  return answer;
}
