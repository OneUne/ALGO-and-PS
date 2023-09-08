function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    // 마지막으로 들어간 애보다 작아진 게 있는지 검사
    // [2,5,1] 이었다면 [0,1]이 stack에. i==2일 때, 1<5이므로 1나와서 1은 1. 1<2이므로 0은 2.
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  // 계속 높아지기만 했다면 끝 idx - 내 idx
  while (stack.length > 0) {
    const top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  return answer;
}
