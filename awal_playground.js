var MyLinkedList = function(val) {
    this.head = null
    this.length = 0
};

MyLinkedList.prototype.get = function(index) {
    if (index >= this.length) return -1
    let currentNode = this.head
    let counter = 0
    while (counter !== index) {
        currentNode = currentNode.next
        counter++
    }
    return currentNode.val
};

MyLinkedList.prototype.getNodeAtIndex = function(index) {
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
    return
};

MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = {val, next: null}

    if (this.length === 0) {
      this.addAtHead(val);
      return;
    }

    console.log(val,"tail");
   let curr = this.head;
    while(curr.next !== null){
        curr = curr.next;
    }

    curr.next = newNode
    
    this.length++
};

MyLinkedList.prototype.addAtIndex = function( index, val) {
    if (index>this.length) return
    if (index == 0) {
       return this.addAtHead(val)
    }
    if (index === this.length) {
       return this.addAtTail(val)
    }
    const newNode = {val, next: null}
    const prevNode = this.getNodeAtIndex(index - 1)
    const holdingPointer = prevNode.next;
    prevNode.next = newNode
    newNode.next = holdingPointer;
    this.length++

    return;
};
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.length ) return

    if (index === 0) {
        this.head = this.head.next
        this.length --;
        return
    }
    
        const prevNode = this.getNodeAtIndex(index - 1)
        const currentNode = prevNode.next
        console.log(currentNode)
        prevNode.next = currentNode.next 
        this.length--;
};

MyLinkedList.prototype.printList = function(){
    
    let curr = this.head;
    let arr = [];
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
}


let myLinkedList = new MyLinkedList();
myLinkedList.addAtTail(1);
// myLinkedList.get(1);
myLinkedList.addAtTail(3);
// myLinkedList.addAtHead(5);
    // linked list becomes 1->2->3
;    // linked list becomes 1->2->3
// myLinkedList.deleteAtIndex(3);    // now the linked list is 1->3

// myLinkedList.addAtHead(7);
// myLinkedList.addAtHead(1);
// myLinkedList.deleteAtIndex(4); 
// myLinkedList.addAtTail(3);
// myLinkedList.get(1);              // return 2
myLinkedList.get(1);              // return 3

console.log(myLinkedList.printList());