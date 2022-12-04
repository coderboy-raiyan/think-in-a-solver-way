

class Stack {
    constructor(){
        this.array = []
    }


    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
        this.array.push(value)

        return this;
    }

    pop(){
        
        this.push.pop();
        return this;
    }
}

const myStack = new Stack();

myStack.push(3)
myStack.push(4)
myStack.peek()
console.log(myStack.peek());