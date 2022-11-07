
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class linkedList{
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }


    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }


    prepend(value){
        const newNode = new Node(value);
        const prevNode = this.head;
        
        newNode.next = prevNode;
        this.head = newNode;

        this.length++;
    }

    insert(index, value){
        const newNode = new Node(value);
        if(index>=this.length){
            this.append(value);
        }
        const leader = this.treverseIndex(index-1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

    }


    remove(index){
        
        const leader  = this.treverseIndex(index-1);
        const unwanted = leader.next;
        leader.next = unwanted.next;
     
        this.length--;
    }



    treverseIndex(index){
        let counter = 0;
        let curr = this.head;
        while(counter !== index){
            curr = curr.next;
            counter++;
        }

        return curr;

    }

    printList(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }


    reverse(){
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second){
            let temp = second.next;
            second.next = first;

            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;

        return this.printList();
    }



}


const myLinkedList = new linkedList(10);

myLinkedList.append(20)
myLinkedList.append(30)
myLinkedList.prepend(30)
myLinkedList.prepend(40)
myLinkedList.insert(1,15)
myLinkedList.remove(2)

console.log(myLinkedList.reverse());