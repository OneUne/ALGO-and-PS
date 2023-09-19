// 일반적인 이진 검색 트리(BST) 구현에서는 중복 값을 허용하지 않습니다.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입
  insert(data) {
    const newNode = new Node(data);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // 노드 검색
  search(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  // 노드 삭제
  delete(data) {
    const removeNode = (node, data) => {
      if (!node) return null;
      if (data === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        const temp = this.getMin(node.right);
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }

  // 최솟값 찾기
  getMin(node = this.root) {
    if (!node) return null;
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

// BinarySearchTree 사용 예제
const bst = new BinarySearchTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);

console.log(bst.search(25)); // 노드 검색
bst.delete(25); // 노드 삭제
console.log(bst.search(25)); // 삭제된 노드 검색 (null)
