const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
// class ListNode {
//   constructor (value) {
//     this.value = value;
//     this.next = null;
//   }
// }
class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const list = new ListNode(element);
    if (this.head) {
      this.tail.next = list;
      this.tail = list;
    } else {
      this.head = list;
      this.tail = list;
    }
    this.length++;
  }

  dequeue() {
    let del = null;
    if (this.head !== null) {
      del = this.head.value;
      this.head = this.head.next;
      this.length--;
    }
    return del;
  }
}
module.exports = Queue;
