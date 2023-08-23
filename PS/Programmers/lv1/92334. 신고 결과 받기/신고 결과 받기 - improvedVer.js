function solution(id_list, report, k) {
  const reportedUsers = new Set(report);
  const reportMap = new Map();
  const reportCounts = {};

  for (const report of reportedUsers) {
    const [reporter, reportee] = report.split(" ");
    reportMap.set(reporter, (reportMap.get(reporter) || []).concat(reportee));
    // reportMap.get('muzi') --> ['frodo', 'neo']
    reportCounts[reportee] = (reportCounts[reportee] || 0) + 1;
  }

  const answer = id_list.map((user) => {
    // ['frodo', 'neo'] 중에서 k이상 신고 당한 애들만 남겨두고, 그 길이 세면 신고한 애 중 정지당한 애 명수 구할 수 있음
    const blockedCount = (reportMap.get(user) || []).filter(
      (reportedUser) => reportCounts[reportedUser] >= k
    ).length;
    return blockedCount;
  });

  return answer;
}
