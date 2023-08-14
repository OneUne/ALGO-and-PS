// a 97, z 122. charCodeAt() String.fromCharCode()
function solution(s, skip, index) {
  var skipArr = [];
  var answer = "";

  for (let i of skip) {
    skipArr.push(i.charCodeAt());
  }

  for (let i of s) {
    var from = i.charCodeAt();
    var to = from + index;
    // from이 122, to가 123이고 skip은 97일 때 . j는 122-> 96->97. to는 97. skip포함 to 98. j98됨.
    for (let j = from; j <= to; j++) {
      if (skipArr.includes(j)) {
        to++;
      }
      if (j > 122) {
        j -= 25;
      }
      if (to > 122) {
        to -= 25; //index가 최대 20이므로 한 바퀴 도는 게 최대
      }
    }

    answer += String.fromCharCode(to);
  }

  return answer;
}
console.log(solution(s, skip, index));
