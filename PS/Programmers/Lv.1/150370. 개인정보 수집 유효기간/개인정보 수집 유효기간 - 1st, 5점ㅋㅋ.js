/*
What to do
- 유효기간 1~100 해결. 12로 나눠서 몫은 연도에 나머지는 달에 추가하고 일 하루 빼면 되는데 1이면 28. --> 몫 구하기? // int() 이런 거 없어서 Math.floor 나 parseInt 써야 함.
- 날짜 비교? 함수 하나 만들면 될 거 같음
- 2021.1.1에 수집됐고 12개월이라면 2021.12.28인데..

ㅋㅋ 5점
*/

function isValid(valid, today) {
  v_list = valid.split(".");
  t_list = today.split(".");
  for (let i = 0; i < 3; i++) {
    if (v_list[i] < t_list[i]) {
      return false;
    }
  }
  return true;
}

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

  return `${year}.${month}.${day}`;
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
    if (!isValid(getExpiryDate(splited[0], termsMap[splited[1]]), today)) {
      answer.push(i + 1);
    }
  });

  return answer;
}
