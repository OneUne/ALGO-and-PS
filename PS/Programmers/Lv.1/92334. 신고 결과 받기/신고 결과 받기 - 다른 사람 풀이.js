// @nd098pkc , - , - , - 외 14 명

id_list = ["muzi", "frodo", "apeach", "neo"];
report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
k = 2;

/*
[new Set(report)] --> Set(5) {'muzi frodo', ...}
[...new Set(report)] --> ['muzi frodo', ...]
[...new Set(report)].map((a)=>{return a.split(" ")}) -> [['muzi', 'frodo'], ... 여기서 return은 없어도 됨
*/

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  let counts = new Map();
  // Map object의 get, set 이용해서 신고 당한 사람 count
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  let good = new Map();
  // 신고한 유저 별 정지당한 횟수 카운트
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  // 정지당한 횟수 없으면 0처리
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

console.log(solution(id_list, report, k));
