function solution(id_list, report, k) {
    const reportedUsers = new Set(report);
    const reportMap = new Map();
    const reportCounts = {};

    for (const report of reportedUsers) {
        const [reporter, reportee] = report.split(' ');

        reportMap.set(reporter, (reportMap.get(reporter) || []).concat(reportee));

        reportCounts[reportee] = (reportCounts[reportee] || 0) + 1;
    }

    const answer = id_list.map((user) => {
        const blockedCount = (reportMap.get(user) || []).filter((reportedUser) => reportCounts[reportedUser] >= k).length;
        return blockedCount;
    });

    return answer;
}
