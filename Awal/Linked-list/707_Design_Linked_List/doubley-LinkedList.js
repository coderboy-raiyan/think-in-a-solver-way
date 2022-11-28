class Node {
    constructor(val, next=null, prev = null){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}



const myDobuleyLinkedList = function(){
    this.head = null;
    this.size = 0;
}


myDobuleyLinkedList.prototype.addAtHead = function(val){
    const newNode = new Node(val);

    newNode.next = this.head;
    newNode.prev = null;
    if(this.head !== null){

        this.head.prev  = newNode;
    }
    this.head = newNode;

    this.size++;

}


myDobuleyLinkedList.prototype.addAtTail = function(val){
    if(this.size === 0){
       return this.addAtHead(val)
    }
    let newNode = new Node(val);

    let curr = this.head;
    while(curr && curr.next){
        curr = curr.next
    }

    curr.next = newNode;
    newNode.prev = curr;

    this.size++;

}

myDobuleyLinkedList.prototype.addAtIndex = function(index,val){
    if(index > this.size){
        return;
    }
    if(index === this.size){
        return this.addAtTail(val);
    }

    if(index === 0){
        return this.addAtHead(val);
    }
    let newNode = new Node(val);
    let leader = this.findIndex(index-1);
    let follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.size++;
    return;
}


myDobuleyLinkedList.prototype.deleteIndex = function(index){
    if(index == 0){
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return;
    }

    if(index>= this.size){
        return;
    }

    let leader = this.findIndex(index-1);
   
    let unwanted = leader.next;
    let prevNode = unwanted.next;
    leader.next = unwanted.next;
    prevNode.prev = leader
    console.log(leader.next.val,"chek");
    this.size--;

    return;
}


myDobuleyLinkedList.prototype.findIndex = function(index){
    let curr = this.head;
    let counter = 0;
    if(index<0 && index>this.size){
        return -1;
    }
    while(counter !== index){
        curr = curr.next;
         counter++;
    }
     
    return curr;
}


myDobuleyLinkedList.prototype.printList= function(){
    let arr = [];
    let curr = this.head;
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr;
}

const myDoubley = new myDobuleyLinkedList();
myDoubley.addAtHead(1);
myDoubley.addAtHead(2);
myDoubley.addAtTail(3);
myDoubley.addAtTail(4);
myDoubley.addAtIndex(1,8)
myDoubley.deleteIndex(1);
console.log(myDoubley.printList());