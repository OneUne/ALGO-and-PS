/*
문제 요약
- survey[i] = 'RT'일 때 R은 i+1번 질문 비동의시 성격유형, T는 동의시 성격유형
- 비동의는 1,2,3 동의는 5,6,7 --> 1,7은 3점 2,6은 2점 3,5는 1점 4는 0점
- 점수 같으면 사전순으로 빠른 것.

자료 구조
- RT, CF, JM, AN 이렇게 묶고싶은데. Map으로 [R,T] = [0, 0] 이런식 가넝?
- 아니다 걍 각 알파벳별로 하고 나중에 비교나 하자~
*/

function solution(survey, choices) {
  var pMap = new Map();

  survey.forEach((v, i) => {
    const choice = choices[i];
    if (choice > 4) {
      pMap.set(v[1], (pMap.get(v[1]) || 0) + choice - 4);
    } else if (choice < 4) {
      pMap.set(v[0], (pMap.get(v[0]) || 0) + (4 - choice));
    }
  });

  const result = ["RT", "CF", "JM", "AN"].map((v) => {
    const typeA = pMap.get(v[0]) || 0;
    const typeB = pMap.get(v[1]) || 0;
    return typeA >= typeB ? v[0] : v[1];
  });

  return result.join("");
}
