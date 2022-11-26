class Node {
    constructor(val, next=null){
        this.val = val;
        this.next = next
    }
}


const LinkedList = function(){
    this.head = null;
    this.size =0
}


LinkedList.prototype.addToHead = function(val){
    const node = new Node(val, this.head);


    this.head = node;
    this.size++
    return;
}


LinkedList.prototype.addToTail = function(val){
    const newNode = new Node(val);

    if(this.size === 0){
        return this.addToHead(val);
    }

    let curr = this.head;

    while(curr.next){
        curr = curr.next;
    }
    curr.next = newNode;
    
    this.size++;
}
LinkedList.prototype.get = function(index){
    if (index >= this.size) return -1;

    let getVal = this.findIndex(index);
   return getVal.val;
}

LinkedList.prototype.addToAt = function(index,val){

    if(!this.size){
        return this.addToHead(val);
    }
    if(index > this.size){
        return;
    }
    if(index == this.size){
        return this.addToTail(val);
    }


    let leader = this.findIndex(index-1);
    let follower = leader.next;
    console.log(leader,"checkin");
    let node = new Node(val);

    leader.next = node;
    node.next =follower;

    this.size++;
    return;
}

LinkedList.prototype.deleteIndex = function(index){

    if(index> this.size){
        return;
    }

    if(index === 0){
        this.head = this.head.next;
        this.size--;
        return;
    }

    let leader = this.findIndex(index-1);
    let unwanted = leader.next;
    leader.next = unwanted.next;

    this.size--;

    return;
}



LinkedList.prototype.findIndex = function(index){
    let curr = this.head;
    if(index<0 && index>this.size){
        return -1;
    }
    let counter =0;
    while(counter !== index){
        curr = curr.next;
        counter++;
    }
    return curr;
}


LinkedList.prototype.printList= function(){
    let curr = this.head;
    let arr = [];
     while(curr){
        arr.push(curr.val);

        curr = curr.next;
     }

     return arr;
}


const myLinkedList = new LinkedList();

myLinkedList.addToHead(1);
myLinkedList.addToHead(2);
myLinkedList.addToTail(3);
myLinkedList.addToAt(1, 4);
myLinkedList.deleteIndex(1)
myLinkedList.get(1)
console.log(myLinkedList.printList(1));