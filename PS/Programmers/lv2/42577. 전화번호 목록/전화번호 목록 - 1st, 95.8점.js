// 둘 다 95.8점
// 반례 : ["12","312"]

/*
테스트 1 〉	통과 (3.53ms, 35.1MB)
테스트 2 〉	통과 (3.85ms, 34.8MB)
테스트 3 〉	통과 (134.21ms, 78.7MB)
테스트 4 〉	통과 (97.68ms, 75.5MB)
*/

function solution(phone_book) {
  var answer = true;
  phone_book.sort();
  let [left, right] = [0, phone_book.length - 1];
  while (left < right) {
    if (phone_book[left + 1].includes(phone_book[left])) {
      answer = false;
      break;
    } else {
      left++;
    }
    if (phone_book[right].includes(phone_book[right - 1])) {
      answer = false;
      break;
    } else {
      right--;
    }
  }
  return answer;
}

/*
테스트 1 〉	통과 (3.56ms, 34.8MB)
테스트 2 〉	통과 (3.62ms, 34.8MB)
테스트 3 〉	통과 (486.33ms, 79.8MB)
테스트 4 〉	통과 (117.95ms, 75.6MB)
*/
function solution(phone_book) {
  var answer = true;
  var plen = phone_book.length;
  phone_book.sort();
  for (let i = plen - 1; i > 0; i--) {
    if (phone_book[i].includes(phone_book[i - 1])) {
      answer = false;
      break;
    }
  }
  return answer;
}
