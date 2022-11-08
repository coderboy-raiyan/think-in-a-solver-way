
// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor(val) {
//         this.head = new Node(val)
//         this.tail = this.head
//         this.length = 1
//     }

//     append(val) {
//         const newNode = new Node(val)
//         this.tail.next = newNode
//         this.tail = newNode
//         this.length++
//     }

//     prepend(val) {
//         const newNode = new Node(val)
//         newNode.next = this.head
//         this.head = newNode
//         this.length++
//     }

//     insert(index, val) {
//         const newNode = new Node(val)
//         const prevNode = this.traverseToIndex(index - 1)
//         newNode.next = prevNode.next
//         prevNode.next = newNode
//         this.length++
//     }

//     remove(index) {
//         const prevNode = this.traverseToIndex(index - 1)
//         prevNode.next = prevNode.next.next
//         this.length--
//     }

//     traverseToIndex(index) {
//         let counter = 0
//         let currenNode = this.head
//         while (counter !== index) {
//             currenNode = currenNode.next
//             counter++
//         }
//         return currenNode
//     }

//     printList() {
//         const arr = []
//         let cur = this.head
//         while (cur.next !== null) {
//             arr.push(cur.val)
//             cur = cur.next
//         }
//         return arr
//     }
    
// }

// const a = new LinkedList(3)
// a.append(45)
// a.append(47)
// a.append(555)
// a.insert(2, 1000)
// // a.remove(2)
// console.log(JSON.stringify(a));
// console.log(a.printList());
// // console.log(a.traverseToIndex(2));

// // [3] [45] [56] [43]
// // head          tail


// 707. Design Linked List(MEDIUM

// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.

// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.

// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.

// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.



// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3   


var MyLinkedList = function(val) {
    this.head = {val, next: null}
    this.tail = this.head
    this.length = 1
};


MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index > this.length) return -1
    let currentNode = this.head
    let counter = 0
    while (counter !== index) {
        currentNode = currentNode.next
        counter++
    }
    return currentNode
};

MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = {val, next: null}
    newNode.next = this.head
    this.head = newNode
    this.length++
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = {val, next: null}
    this.tail.next = newNode
    this.tail = newNode
    this.length++
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0) return
    const newNode = {val, next: null}
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
};
MyLinkedList.prototype.deleteAtIndex = function(index) {
    const prevNode = this.get(index - 1)
    const currentNode = prevNode.next
    prevNode.next = currentNode.next
    this.length--
};

// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList(2)
//  var param_1 = obj.get(index)
 obj.addAtTail(989)
 obj.addAtTail('Sadique')
//  console.log(obj.findNodeAtIndex(3));
//  obj.deleteAtIndex(index)


 console.log(JSON.stringify(obj));
 console.log(obj.get(6));