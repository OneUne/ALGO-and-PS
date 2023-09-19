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
    const root = this.peek();
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
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
