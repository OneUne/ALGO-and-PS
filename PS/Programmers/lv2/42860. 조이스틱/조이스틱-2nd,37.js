function solution(name) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var answer = name.length - 1;
  let maxAlen = 0;
  let aLen = 0;
  [...name].forEach((v) => {
    if (v === "A") aLen++;
    else {
      let idx = alphabet.indexOf(v);
      answer += Math.min(idx, 26 - idx);
      maxAlen = Math.max(maxAlen, aLen);
      aLen = 0;
    }
  });
  return answer - maxAlen;
}
