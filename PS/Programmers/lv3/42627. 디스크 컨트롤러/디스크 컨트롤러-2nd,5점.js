//5점
class PriorityQueue {
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
      let parVal = this.heap[parIdx][0] + this.heap[parIdx][1];
      let curVal = this.heap[curIdx][0] + this.heap[curIdx][1];
      if (this.findSmallSum(this.heap[parIdx], this.heap[curIdx])) break;
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
      if (
        left < this.size() &&
        this.findSmallSum(this.heap[left], this.heap[smallest])
      )
        smallest = left;
      if (
        right < this.size() &&
        this.findSmallSum(this.heap[right], this.heap[smallest])
      )
        smallest = right;
      if (curIdx === smallest) break;
      [this.heap[smallest], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[smallest],
      ];
      curIdx = smallest;
    }
  }
  findSmallSum(small, big) {
    if (
      small[0] + small[1] < big[0] + big[1] ||
      (small[0] + small[1] == big[0] + big[1] && small[0] >= big[0])
    )
      return true;
    else return false;
  }
}

function solution(jobs) {
  var answer = 0;
  var pq = new PriorityQueue();
  jobs.map((v) => pq.enqueue(v));
  while (pq.size() > 0) {
    answer += answer + pq.peek()[1] - pq.peek()[0];
    pq.dequeue();
  }
  return Math.floor(answer / jobs.length);
}
