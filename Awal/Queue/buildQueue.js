class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
      let newNode = new Node(value);
      if(this.length == 0){
       this.first = newNode;
        this.last = newNode;
        this.length++;
        return;
      }
      console.log('aodl')
      this.last.next = newNode;
      this.last = this.last.next;
      this.length++;
      return this;
      
    }
    dequeue(){
      if(!this.first){
        return;
      }
      if(this.first == this.last){
        this.last = null;
      }
  
      this.first = this.first.next;
      this.length--;
      
    }
    //isEmpty;
  }
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  // myQueue.enqueue('Pavel');
  myQueue.enqueue('gal');
  myQueue.peek();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.dequeue();
  myQueue.peek();
  console.log(myQueue)
  