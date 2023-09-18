/* 5점 ㅎ [작업이 요청되는 시점, 작업의 소요시간] not 작업이 끝나는 시점
jobs = [[0,10], [1,2], [2,8]] 일 때 [10, 1, 6] [10, 3, 10]
1-2-3 10초 12-1 11초 20-2 18초
1-3-2 10초 18-2 16초 21-1 19초
2-1-3 3-1 2초 13초 19초
2-3-1 2초 9초 21초 --> 32초
3-1-2 8초 20초 21초 
3-2-1 8초 11초 21초

jobs = [[8,9], [1,10], [5,7]] 일 때 [1, 9, 2] [17, 11, 12]
1-2-3 17-8 9초. 27-1 26초. 34-5 29초.
2-3-1 10초. 18-5 13초. 27-8 15초. --> 38초
3-1-2 12-5 7초. 21-8 13초. 31-1 30초.
2-1-3 11-1 10초. 12초. 22초.
2-3-1 10초. 13초. 19초.
*/
class MinHeap {
  constructor() {
    this.heap = [];
  }
  enqueue(item) {
    this.heap.push(item);
    this.heapifyUp();
  }
  dequeue() {
    if (this.size() === 0) return null;
    else if (this.size() === 1) return this.heap.pop();
    else {
      const root = this.peek();
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
    }
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  heapifyUp() {
    let curIdx = this.size() - 1;
    while (curIdx > 0) {
      let parIdx = Math.floor((curIdx - 1) / 2);
      if (this.heap[parIdx] <= this.heap[curIdx]) break;
      [this.heap[parIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parIdx],
      ];
      curIdx = parIdx;
    }
  }
  heapifyDown() {
    let [curIdx, left, right, smallest] = [0, 0, 0, 0];
    while (true) {
      [left, right] = [curIdx * 2 + 1, curIdx * 2 + 2];
      if (left < this.size() && this.heap[smallest] > this.heap[left])
        smallest = left;
      if (right < this.size() && this.heap[smallest] > this.heap[right])
        smallest = right;
      if (curIdx === smallest) break;
      [this.heap[smallest], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[smallest],
      ];
      curIdx = smallest;
    }
  }
}
function solution(jobs) {
  var answer = 0;
  var mh = new MinHeap();
  jobs.map((v) => mh.enqueue(v[1] - v[0]));
  while (mh.size() > 0) {
    answer += answer + mh.dequeue();
  }
  return Math.floor(answer / jobs.length);
}
