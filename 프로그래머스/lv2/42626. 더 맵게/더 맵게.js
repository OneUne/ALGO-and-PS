class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    
    enqueue(item){
        this.heap.push(item);
        this.heapifyUp();
    }
    
    dequeue(){
        if(this.isEmpty()) return null;
        if(this.size()===1) return this.heap.pop();
        const root = this.peek();
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }
    
    isEmpty(){
        return this.size() === 0;
    }
    
    size(){
        return this.heap.length;
    }
    
    peek(){
        return this.heap[0];
    }
    
    heapifyUp(){
        var curIdx = this.size()-1;
        while(curIdx>0){
            var parIdx = Math.floor((curIdx-1)/2);
            if(this.heap[curIdx] >= this.heap[parIdx]) break;
            [this.heap[curIdx], this.heap[parIdx]] = [this.heap[parIdx], this.heap[curIdx]];
            curIdx = parIdx;
        }
    }
    
    heapifyDown(){
        var curIdx = 0;
        while(true){
            var leftChild = curIdx * 2 + 1;
            var rightChild = curIdx * 2 + 2;
            var smallestIdx = curIdx;
            if(leftChild < this.size() && this.heap[smallestIdx] > this.heap[leftChild]){
                smallestIdx = leftChild;
            }
            if(rightChild < this.size() && this.heap[smallestIdx] > this.heap[rightChild]){
                smallestIdx = rightChild;
            }
            if(curIdx === smallestIdx) break;
            [this.heap[smallestIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[smallestIdx]];
            curIdx = smallestIdx;
        }
    }
}

function solution(scoville, K){
    var answer = 0;
    const pq = new PriorityQueue();
    
    scoville.map((v)=>pq.enqueue(v));
    
    while(pq.size() > 1){
        var [min1, min2] = [pq.dequeue(), pq.dequeue()];
        if(min1 >= K) break;
        pq.enqueue(min1 + min2*2);
        answer++;
    }
    if(pq.peek() < K) return -1;
    return answer;
}