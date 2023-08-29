// arr.length 식은 매번 루프때마다 메소드를 실행시키니 length 선언한 값을 변수로 뺀 후 그 변수를 사용하면 성능이 조금 더 향상합니다 ㅎㅎ

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
}
