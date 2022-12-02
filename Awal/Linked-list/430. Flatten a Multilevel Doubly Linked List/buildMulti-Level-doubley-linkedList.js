/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class listNode{
    constructor(val, next=null, prev=null, child=null){
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6] 

const buildMultiLevel = function(nodes){
    const head = new listNode(nodes[0]);
    console.log(head);
    let curr = head;
    
    for(let i=1; i<nodes.length; i++){
        let val = nodes[i];
        // console.log(val);

        let nextNode;

        if(Array.isArray(val)){
            nextNode = buildMultiLevel(val);
            curr.child = nextNode;
            continue;
        }

        nextNode = new listNode(val);
        curr.next = nextNode;
        nextNode.prev = curr;
        curr = nextNode;
    }

    return head;

}


const printListMulti = head => {
    if(!head) {
      return;
    }
  
    console.log(head.val)
  
    if(head.child) {
      printListMulti(head.child);
    }
  
    printListMulti(head.next);
  }

let multiLinkedList = buildMultiLevel(nodes);

console.log((multiLinkedList))