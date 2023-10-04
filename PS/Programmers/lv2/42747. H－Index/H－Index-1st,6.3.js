// 문제 제대로 안 읽고 중간값 구한듯
function solution(citations) {
  const clen = citations.length;
  citations.sort((a, b) => a - b);
  return clen % 2 === 0
    ? citations[clen / 2 - 1]
    : citations[Math.floor(clen / 2)];
}
