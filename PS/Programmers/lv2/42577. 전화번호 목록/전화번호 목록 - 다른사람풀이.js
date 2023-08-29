// @박진석
// 해시로 풀려면 이렇게 ~

function solution(phone_book) {
  const hashMap = {};

  phone_book.forEach((v) => {
    hashMap[v] = 1;
  });

  for (let phoneNumber of phone_book) {
    let temp = "";

    for (let number of phoneNumber) {
      temp += number;

      if (hashMap[temp] && temp != phoneNumber) {
        return false;
      }
    }
  }

  return true;
}
