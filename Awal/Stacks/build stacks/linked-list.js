class Node {
    constructor(val){
        this.val = val;
        this.next = null
    }
}

const myStack = function(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}


myStack.prototype.peek = function(){
    return this.head;

}
myStack.prototype.pop = function(){
    if(this.head === null){
        return;
    }
    if(this.head === this.tail){
        console.log("dom");
        this.tail = null;
    }

      let nextPointer = this.head.next;
      console.log(nextPointer,"clod");
        this.head = nextPointer;
    this.size--;
    return this;

}

myStack.prototype.push = function(val){
    let newNode = new Node(val)
    if(this.head === null){
        this.head = newNode;
        this.tail = newNode;
        return;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
    return;
}


let obj = new myStack();
obj.push(5);
obj.push(3);
obj.pop()
obj.pop()

console.log(obj);