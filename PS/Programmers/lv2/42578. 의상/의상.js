// 입을 수도, 안 입을 수도 있어서 하나에 대한 선택지는 +1임 근데 하나도 안 입을 순 없으니까 마지막에 -1

function solution(clothes) {
  var answer = 1;
  var map = new Map();
  for (let i of clothes) {
    map.set(i[1], (map.get(i[1]) || 1) + 1);
  }
  for (let [k, v] of map) {
    answer *= v;
  }
  return answer - 1;
}
