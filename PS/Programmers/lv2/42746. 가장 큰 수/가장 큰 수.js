function solution(numbers) {
  let sortedString = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return parseInt(sortedString) === 0 ? "0" : sortedString;
}
