function solution(targets) {
  targets.sort((a, b) => a[0] - b[0]);

  let answer = targets.reduce(
    (count, [start, end]) => {
      if (start < count.end) {
        count.end = Math.min(count.end, end);
      } else {
        count.end = end;
        count.total++;
      }
      return count;
    },
    { end: -Infinity, total: 0 }
  );

  return answer.total;
}
