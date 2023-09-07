function solution(priorities, location) {
    let answer = 0;

    const queue = priorities.map((priority, index) => ({ index, priority }));

    while (queue.length > 0) {
        const currentProcess = queue.shift();
        const highestPriority = Math.max(...queue.map(process => process.priority));

        if (currentProcess.priority < highestPriority) {
            queue.push(currentProcess);
        } else {
            answer++;
            if (currentProcess.index === location) break;
        }
    }

    return answer;
}
