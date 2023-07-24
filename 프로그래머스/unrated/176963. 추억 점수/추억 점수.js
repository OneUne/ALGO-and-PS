function solution(name, yearning, photo) {
  var answer = [];
  const nameYearning = {};
  for (i in name) {
    nameYearning[name[i]] = yearning[i];
  }
  for (i of photo) {
    let sum = 0;
    for (j of i) {
      if (nameYearning[j]) {
        sum += nameYearning[j];
      }
    }
    answer.push(sum);
  }
  return answer;
}