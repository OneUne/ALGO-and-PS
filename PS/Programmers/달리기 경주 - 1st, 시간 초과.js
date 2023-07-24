/*
제한사항
5 ≤ players의 길이 ≤ 50,000
players[i]는 i번째 선수의 이름을 의미합니다.
players의 원소들은 알파벳 소문자로만 이루어져 있습니다.
players에는 중복된 값이 들어가 있지 않습니다. --> indexof사용가능
3 ≤ players[i]의 길이 ≤ 10
2 ≤ callings의 길이 ≤ 1,000,000
callings는 players의 원소들로만 이루어져 있습니다.
경주 진행중 1등인 선수의 이름은 불리지 않습니다. --> idx-1이 range 벗어나지 않음

배열 순회하며 단순 위치 변경으로는 시간 초과.
원소 카운트 세고 처음 플레이어 순서 + 해주는 걸로 해서 나중에 위치 정해볼까?
--> 그러면 앞에 있던애가 밀리는 경우를 처리할 수 없음
indexOf가 문제임. index를 따로 저장해두고 관리하자.
*/
function switchValues(arr, idx) {
  [arr[idx], arr[idx - 1]] = [arr[idx - 1], arr[idx]];
}

function solution(players, callings) {
  for (call of callings) {
    const idx = players.indexOf(call);
    switchValues(players, idx);
  }
  const answer = players;
  return answer;
}
