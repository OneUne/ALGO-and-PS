//37
/*
해결해야할 것
- 알파벳 이동 -> alphabet 문자열로 두고 indexOf해서 B->Z면 25(Z)-1(B)랑 (25+1)%24 해서 더 작은 값으로 -> 는 어차피 초기값 다 A구나 그럼 25%indexOf('Z')+1하면 될듯 -> 바보 26-idx가 맞지...
- 커서 이동 -> 이건 그냥 처음 위치만 중요한 것 같음. -> 아님. 이게 중요함. 앞에 A가 몰려있거나, 뒤에 A가 몰려있을 때가 중요한 거 같음. 이걸 어떻게 걸러내지.

*/
function solution(name) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var answer = name.length - 1;
  [...name].forEach((v) => {
    if (v !== "A") {
      // 25%0 은 NaN
      let idx = alphabet.indexOf(v);
      answer += Math.min(idx, 26 - idx);
    }
  });
  if (name[1] === "A") answer--;
  return answer;
}
