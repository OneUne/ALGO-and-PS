function solution(players, callings) {
  playerIdx = {};
  for ([idx, elem] of players.entries()) {
    playerIdx[elem] = idx;
  }
  // 위 for문 players.forEach((idx,elem)=>playerIdx[elem]=idx)로 가능
  for (call of callings) {
    const idx = playerIdx[call];
    const temp = players[idx - 1];
    // for문 밖에서 let 선언해서 변경하는 거나 const나 퍼포먼스 차이 없음. js엔진이 최적화 수행하기 때문.
    players[idx - 1] = call;
    players[idx] = temp;

    playerIdx[call] = idx - 1;
    playerIdx[temp] = idx;
  }

  const answer = players;
  return answer;
}
