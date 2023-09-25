/*input
[1000, 111, 110, 101, 100, 11, 10, 1, 0]

correct
""1111111101011010010000"

output
"1.11111110101101e+21"
*/
function solution(numbers) {
  let sortedString = numbers
    .map((v) => v.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return parseInt(sortedString).toString();
}
