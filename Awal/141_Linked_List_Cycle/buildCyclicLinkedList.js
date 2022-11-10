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

MyLinkedList.prototype.createCycle = function(index){
    
    let curr = this.head;

    while(curr.next !== null){
        curr = curr.next;
    }

    let pos = this.getNodeAtIndex(index-1);
    console.log(pos.next,"olo");
    // let target = 
    curr.next = curr;

    return curr;
}


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
myLinkedList.addAtTail(3);           // return 2
// myLinkedList.addAtTail(4);           // return 2
myLinkedList.createCycle(1)

console.log(myLinkedList);