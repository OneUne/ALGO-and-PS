/* 13.3점 -> 장르 별로 가장 많이 재생된 노래를 "두 개"씩 모아 max가 4가 아님.
필요한 거 
- 장르별 재생횟수
- 장르, 플레이횟수, genres에서의 인덱스
*/

function solution(genres, plays) {
  var answer = [];
  var playSum = {};
  var playAndIndex = {};

  genres.forEach((v, i) => {
    playSum[v] = playSum[v] ? playSum[v] + plays[i] : plays[i];
    playAndIndex[v] = playAndIndex[v]
      ? [...playAndIndex[v], [plays[i], i]]
      : [[plays[i], i]];
  });

  for (let [k, v] of Object.entries(playAndIndex)) {
    var sortedV = v.sort((a, b) => b[0] - a[0]);
    playAndIndex[k] = sortedV;
  }

  const psEntries = Object.entries(playSum);
  psEntries.sort((a, b) => b[1] - a[1]);

  for (let [k, v] of psEntries) {
    for (let i of playAndIndex[k]) {
      if (answer.length >= 4) break;
      answer.push(i[1]);
    }
  }
  return answer;
}
