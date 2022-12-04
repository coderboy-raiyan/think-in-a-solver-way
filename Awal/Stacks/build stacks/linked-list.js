class Node{
    constructor(val){
        this.top = val;
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }


    peek(){
        return this.top;
    }

    pop(){

        if(!this.top){
            return null;
        }


        if(this.top === this.bottom){
            this.bottom = null;
        }

        let nextPointer = this.top.next;
        this.top = nextPointer;

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
        newNode.next = this.top;
        this.top = newNode;
        }else{
            this.top = newNode
            this.bottom = newNode
        }

        this.length++;
    }
}


const myStack = new Stack();

myStack.push(2)
myStack.push(4)
myStack.push(7)
myStack.peek();
console.log(myStack.peek());