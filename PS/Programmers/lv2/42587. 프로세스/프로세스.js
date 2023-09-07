function solution(priorities, location) {
  let answer = 0;

  const queue = priorities.map((priority, index) => ({ index, priority }));
  /*
    JavaScript에서 객체의 키와 값이 동일한 변수명일 때, 축약해서 표현할 수 있습니다.
    이는 ECMAScript 2015 (ES6)부터 도입된 객체 리터럴의 단축 문법 중 하나입니다. 
    객체 리터럴에서 변수와 동일한 이름의 속성을 가질 때, 이를 생략하고 키만 쓸 수 있게 해줍니다.
    따라서 { index, priority }은 index: index, priority: priority와 동일한 결과를 갖습니다.
    */

  while (queue.length > 0) {
    const currentProcess = queue.shift();
    const highestPriority = Math.max(
      ...queue.map((process) => process.priority)
    );

    if (currentProcess.priority < highestPriority) {
      queue.push(currentProcess);
    } else {
      answer++;
      if (currentProcess.index === location) break;
    }
  }

  return answer;
}
