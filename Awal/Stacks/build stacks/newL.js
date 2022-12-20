class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    peek(){
        return this.head;
    }

    pop(){

        if(!this.head){
            return null;
        }


        if(this.head === this.tail){
            this.tail = null
        }

        let nextPointer = this.head.next;
        console.log(nextPointer,"clod");
          this.head = nextPointer;

        this.length--;
        return this;

    }

    push(val){
        
        const newNode = new Node(val)
        if(this.length>0){
            /** You can do this way  */
        //     let holdingPointer = this.top;
        //     this.top = newNode;
        //  this.top.next =   holdingPointer;
        
        /** Or you can do this way */
        newNode.next = this.head;
    this.head = newNode;
        }else{
            this.head = newNode;
        this.tail = newNode;
        }

        this.length++;
    }
}


const myStack = new Stack();

myStack.push(2)
myStack.push(4)
myStack.pop(7)
myStack.pop();
console.log(myStack);