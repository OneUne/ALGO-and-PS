function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const validChars = alphabet.split("").filter((char) => !skip.includes(char));

  // validChars가 16개 있을 때, index가 20이라면 0-15에서 0을 20만큼 밀었을때 4가 되어야 함.
  // 20 % 16이 4잖아..?

  let answer = "";
  for (const char of s) {
    const idx = validChars.indexOf(char);
    answer += validChars[(idx + index) % validChars.length];
  }

  return answer;
}
