// 정확성 50 효율성 0 (시간 초과)

function solution(participant, completion) {
  let diff = participant.filter((x) => !completion.includes(x)); // 차집합.. 인데 이것만으론 동명이인을 고려할 수 없음
  if (diff.length > 0) {
    return diff[0];
  } else {
    return participant.filter(
      (item, index) => participant.indexOf(item) != index
    )[0]; // 동명이인 찾기~
  }
}
