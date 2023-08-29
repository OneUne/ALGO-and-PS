function solution(phone_book) {
  var answer = true;
  var plen = phone_book.length;
  phone_book.sort();
  for (let i = plen - 1; i > 0; i--) {
    if (phone_book[i].slice(0, phone_book[i-1].length) === phone_book[i-1]){
      answer = false;
      break;
    }
  }
  return answer;
}