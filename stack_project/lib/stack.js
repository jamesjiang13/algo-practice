// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let oldTop = this.top;
      newNode.next = oldTop;
      this.top = newNode;
    }
    this.length++;
    return this.length
  }

  pop() {
    if (!this.length) return null;
    let oldTop = this.top;
    let newTop = oldTop.next;
    this.top = newTop;
    this.length--;
    if (this.length === 0) {
      this.top = null;
      this.bottom = null;
    }
    return oldTop.value;
  }

  size() {
    return this.length;
  }
}

exports.Node = Node;
exports.Stack = Stack;
