class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

MyLinkedList.prototype.get = function(index) {
    if (index >= this.size) return -1;
    
    let curr = this.head;
    
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    
    return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    const node = new Node(val);
    
    node.next = this.head;
    this.head = node;
    this.size++;
    
    return;
};

MyLinkedList.prototype.addAtTail = function(val) {
    if (this.size == 0) {
        this.addAtHead(val);
        return;
    }
    
    let curr = this.head;
    
    while (curr.next != null) {
        curr = curr.next;
    }
    
    const node = new Node(val);
    
    curr.next = node;
    this.size++;
    
    return;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) return;
    
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    
    if (index === this.size) {
        this.addAtTail(val);
        return;
    }
    
    let curr = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    
    const next = curr.next;
    const node = new Node(val);
    
    curr.next = node;
    node.next = next;
    this.size++;
    
    return;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) return;
    
    if (index == 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }
    
    let curr = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    
    curr.next = curr.next.next;
    this.size--;
    
    return;
};


let myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.addAtIndex(2, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3

console.log(myLinkedList);