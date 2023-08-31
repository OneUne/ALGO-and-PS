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
    var cnt = 0;
    for (let i of playAndIndex[k]) {
      if (cnt >= 2) break;
      answer.push(i[1]);
      cnt++;
    }
  }
  return answer;
}
