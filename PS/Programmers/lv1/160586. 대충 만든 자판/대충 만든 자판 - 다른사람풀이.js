/*
@신대호, 유호영
keymap이 ["ABACD", "BCEFD"]	일 때
map={
    A: 1
    B: 1
    ...
}
이렇게 indexOf 쓸 수 있는 친구들은 대체로 map 따로 만들어 놓고 가는 게 좋은듯

.map?
	Map은 배열의 각 원소를 돌아가면서 함수를 적용하는거
	items = "ABCD"일 때
	[...items].forEach((idx, i)=>{} 이랑
	items.split('').map((i, idx) => {} 랑 같은 느낌
    
.reduce? 
    각 배열의 요소에 대해 주어진 함수(reducer)를 적용하고 하나의 값을 내놓음
	cur이 누적값인데, 0이 초기값.
	Result = A || B 에서 둘 다 true 면 result = A가 됨. Undefined || -1 이면 -1. NaN || -1 이면 -1.
	Cur += undefined 해버리면 cur 은 NaN이 되어 -1 Push~ 

*/

function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
