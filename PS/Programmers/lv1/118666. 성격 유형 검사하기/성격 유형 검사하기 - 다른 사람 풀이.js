// @ 익명 , 박민혜 , Kim minho , dublove667@gmail.com 외 32 명

/*
내 코드와 다른 점
- 일단 0으로 다 초기화해놓고 시작해서 나중에 || 0 안해도 됐음
- Math.abs()
- [disagree, agree] 이런것도 넘 예쁘다.
*/

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    // 이런 거 [disagree, agree] = 'RT' 면 각각 할당 되는 거. map 돌릴 때도 [a,b] 하면 각각 쓸 수 있는 거.
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
