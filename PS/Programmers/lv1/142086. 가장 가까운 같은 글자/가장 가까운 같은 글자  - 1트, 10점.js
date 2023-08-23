// aa이렇게 있을 때 두번 째 a도 -1이 되 버림~ i+1필요

function solution(s) {
  var answer = [];
  let smap = {};

  [...s].forEach((v, i) => {
    if (!smap[v]) {
      answer.push(-1);
    } else {
      answer.push(i - smap[v]);
    }
    smap[v] = i;
  });

  return answer;
}
