// - , - , 탈퇴한 사용자 , - 외 389 명
// for문 처돌이도 아니고 앞으론 map filter 먼저 써버릇해보장~

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
