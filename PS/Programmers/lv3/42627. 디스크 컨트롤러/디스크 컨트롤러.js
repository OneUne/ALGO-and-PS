function solution(jobs) {
    let answer = 0;
    let currentTime = 0;
    let index = 0;
    const n = jobs.length;

    jobs.sort((a, b) => a[0] - b[0]); // 작업 요청 시간순으로 정렬

    const waitingQueue = []; // 대기 큐
    const completedQueue = []; // 작업 완료 큐

    while (completedQueue.length < n) {
        while (index < n && jobs[index][0] <= currentTime) {
            waitingQueue.push(jobs[index]);
            index++;
        }

        if (waitingQueue.length === 0) {
            currentTime = jobs[index][0];
        } else {
            waitingQueue.sort((a, b) => a[1] - b[1]); // 소요 시간 순으로 정렬
            const [requestTime, processTime] = waitingQueue.shift();
            currentTime += processTime;
            answer += currentTime - requestTime;
            completedQueue.push(currentTime - requestTime);
        }
    }

    return Math.floor(answer / n);
}