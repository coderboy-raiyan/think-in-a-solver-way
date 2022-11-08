
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor(val) {
        this.head = new Node(val)
        this.tail = this.head
        this.length = 1
    }

    append(val) {
        const newNode = new Node(val)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(val) {
        const newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    insert(index, val) {
        const newNode = new Node(val)
        const prevNode = this.traverseToIndex(index - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode
        this.length++
    }

    remove(index) {
        const prevNode = this.traverseToIndex(index - 1)
        prevNode.next = prevNode.next.next
        this.length--
    }

    traverseToIndex(index) {
        let counter = 0
        let currenNode = this.head
        while (counter !== index) {
            currenNode = currenNode.next
            counter++
        }
        return currenNode
    }

    printList() {
        const arr = []
        let cur = this.head
        while (cur.next !== null) {
            arr.push(cur.val)
            cur = cur.next
        }
        return arr
    }
    
}

const a = new LinkedList(3)
a.append(45)
a.append(47)
a.append(555)
a.insert(2, 1000)
// a.remove(2)
console.log(JSON.stringify(a));
console.log(a.printList());
// console.log(a.traverseToIndex(2));

// [3] [45] [56] [43]
// head          tail