// https://chamdom.blog/pg2-42860/
function solution(name) {
  let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt());
    let idx = i + 1;

    // 연속되는 A의 개수 count
    while (idx < name.length && name[idx] === "A") {
      idx++;
    }

    /*
      순서대로 가는 것(name.length)
      뒤로 돌아 가는 것(i * 2 + name.length - idx)
      뒷 부분을 먼저 입력하는 것(i + 2 * (name.length - idx))
      "KKABCAAADDD"일 때 len은 11. AAA 부분에서 i는 5에서 6,7. 5*2+11-7 은 14. 5+2*4 = 13.
      뒤로 돌아간다? K->KABCA->CBAKK->DDDA
      뒷 부분을 먼저 입력한다? K->DDDA->DDDK->KABCA
      이건 순서대로 가는게 최적

      다른 예시를 들어보자 "BBCCAAD". len은 7. minMove는 5.
      i가 3일 때 idx=5 뒤로 돌아가는 거 6+2=8, 뒷부분 먼저 3+4=7
      i가 0일 때 idx=1 뒤로 돌아가는 거 6. 뒷부분 먼저 5.
      아익까 각각의 자리에서 A를 마주치지 않을 때까지 뒤로갔다, 앞으로 갔다, 그냥 쭉 갔다 하는 거의 최소값을 찾는 거.
    */
    min_move = Math.min(
      min_move,
      i * 2 + name.length - idx,
      i + 2 * (name.length - idx)
    );
  });

  return answer + min_move;
}
