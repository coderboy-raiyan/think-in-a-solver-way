

class Node{
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}



let MyLinedList = function(){
  this.head = null;
  this.size = 0;
}

MyLinedList.prototype.addAtHead = function(val){
  let newNode = new Node(val)

  newNode.next = this.head;

  if(this.head !== null){
     this.head.prev = newNode;
  }

  this.head = newNode;
  this.size++;
}

MyLinkedList.prototype.addAtTail = function(val){
  if(this.size == 0){
    return this.addAtHead(val)
  }

  let newNode = new Node(val);

  let curr = this.head;
    while(curr && curr.next){
      curr = curr.next;
    }
    curr.next = newNode;
    newNode.prev= curr;

    this.size++;
}

MyLinkedList.prototype.addAtIndex = function(index, val){
  if(index == 0){
    return this.addAtHead(val)
  }
  if(index === this.size){
    return this.addAtTail(val);
  }
  if(index > this.size || index < 0){
    return;
  }
  let newNode = new Node(val);
  let leader = this.findIndex(index -1);
  let follower = leader.next;
  leader.next = newNode;
  newNode.prev = leader;
  follower.prev = newNode;
  newNode.next = follower;

  this.size++;
  return;
}

MyLinkedList.prototype.deleteAtIndex = function(index){
  if(index == this.size){
    this.head = this.head.next;
    this.size--;
    return;
  }
  
  let leader = this.findIndex(index -1);
  let unwanted = leader.next;
  leader.next = unwanted.next;
  unwanted.next.prev = leader;

  this.size--;
}


MyLinkedList.prototype.findIndex = function(index){
  if(index < 0 || index > this.size){
    return -1;
  }

  let counter = 0;
  let curr = this.head;

  while(index !== counter){
    curr = curr.next;
  }

  return curr;
}
