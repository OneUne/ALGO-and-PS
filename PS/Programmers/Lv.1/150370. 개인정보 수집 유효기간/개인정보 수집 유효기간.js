function getExpiryDate(date, months) {
  const dateList = date.split(".").map((v) => parseInt(v));
  let year = dateList[0];
  let month = dateList[1] + months;
  let day = dateList[2];

  if (month > 12) {
    year += parseInt(month / 12);
    month %= 12;
    if(month == 0){
        year -= 1;
        month = 12;
    }
  }
  if (day == 1 && month == 1) {
    year -= 1;
    month = 12;
    day = 28;
  } else if (day == 1) {
    day = 28;
    month -= 1;
  } else {
    day -= 1;
  }

  return `${year}.${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")}`;
}


function solution(today, terms, privacies) {
    var answer = [];
    var termsMap = {};
    var splited;
    
    for(let t of terms){
        splited = t.split(' ')
        termsMap[splited[0]] = parseInt(splited[1])
    }
    
    privacies.forEach((p,i) => {
        splited = p.split(' ')
        if (getExpiryDate(splited[0], termsMap[splited[1]]) < today){
            answer.push(i+1)
        }
    })
    
    return answer;
}