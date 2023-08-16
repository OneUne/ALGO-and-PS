/*
20231228일 때 20220102에 2년 저장하는 거면 valid해야되는데, isValid에서 12>1이라서 잘못됨.
생각해보니 날짜 비교할거면 그냥 문자열 그대로 해줘도 됨. 대신 달, 일이 1자리수일 때 맞추는 거만 주의하면 됨.
--> .toString().padStart(2, "0") 이렇게 해결
but still 90 points!
--> 20240828일 때 20240701 1달 해봤더니 day 1일 때 month -=1 하는 거 고려 안해줘서.. 근데 이거해도 95점이야..
--> month가 12로 나누어떨어질 때 고려 못 했네요..~ ex) 20201217일 때 20191217 1년.
*/

var today = "2022.05.19";
var terms = ["A 3"];
var privacies = ["2022.02.19 A"];

function getExpiryDate(date, months) {
  const dateList = date.split(".").map((v) => parseInt(v));
  let year = dateList[0];
  let month = dateList[1] + months;
  let day = dateList[2];

  if (month > 12) {
    year += parseInt(month / 12);
    month %= 12;
  }
  if (day == 1 && month == 1) {
    year -= 1;
    month = 12;
    day = 28;
  } else {
    day = day == 1 ? 28 : day - 1;
  }

  return `${year}.${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")}`;
}

function solution(today, terms, privacies) {
  var answer = [];
  var termsMap = {};
  var splited;

  for (let t of terms) {
    splited = t.split(" ");
    termsMap[splited[0]] = parseInt(splited[1]);
  }

  privacies.forEach((p, i) => {
    splited = p.split(" ");
    if (getExpiryDate(splited[0], termsMap[splited[1]]) < today) {
      answer.push(i + 1);
    }
  });

  return answer;
}

console.log(solution(today, terms, privacies));
