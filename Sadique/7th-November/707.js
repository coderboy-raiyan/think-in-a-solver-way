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
    this.head = null
    this.tail = this.head
    this.length = 0
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
    if (this.length === 0) {
        this.head = newNode
        this.tail = this.head
        this.length++
        return
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = {val, next: null}
    if (this.length === 0) {
        this.head = newNode
        this.tail = this.head
        this.length++
        return
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) return
    if (index === this.length) {
        this.addAtTail(val)
        this.length++
    }
    const newNode = {val, next: null}
    const prevNode = this.get(index - 1)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length++
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 ) return
    if (index > this.length - 1) return
    if (index === 0 && this.length === 1) {
        this.head = null
        this.tail = null
        this.length = 0
        return
    }
    if (index !== 0 && this.length > 1) {
        if (index === this.length - 1) {
            const prevNode = this.get(index - 1)
            prevNode.next = null
            this.tail = prevNode
            this.length--
            return
        }
        const prevNode = this.get(index - 1)
        const currentNode = prevNode.next
        prevNode.next = currentNode.next
        this.length--
    }
};

// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList()
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1, 2)
console.log(obj.get(1));
obj.deleteAtIndex(1)
console.log(obj.get(1));
 console.log(JSON.stringify(obj));