/*
1. citations = [1,2,3,5,5,6,7]일 때 4임
2. citations = [1,2,3,4,5,6,7,8]일 때 4임
    --> len/2한 idx에서 남은거(len-idx)가 c[idx]보다 작다면 idx 줄이고 남은거가 이상인거 하면 return
3. citations = [4,4,7,8,10]일 때는 4 !! 
4. citations = [5,6,7]일 때는 5 !!아니고 3!! --> idx 0일때까지 못찾으면 len리턴
5. citations = [0, 0, 16848, 23456]일 때는 2.. --> 남은거가 이상일 때 남은 크기를 return 해야겠네
6. citations = [5,5,5,5,5,5,5,5]일 때는 5

cf. [0, 0, 0, 0, 0, 6] 일 때 1이어야 하는데 2가 나옴
--> 이렇게 접근하는 게 아닌 거 같음. 갈아엎자.
*/

function solution(citations) {
  citations.sort((a, b) => a - b);
  var clen = citations.length;
  var idx = Math.floor(clen / 2);

  while (true) {
    if (clen - idx < citations[idx] && idx > 0) idx--;
    else break;
  }

  // 1, 5 커버
  if (clen - idx - 1 > citations[idx]) return clen - idx - 1;

  // 4, 6 커버
  return idx === 0 ? clen : citations[idx];
}
