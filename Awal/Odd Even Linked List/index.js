class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


let head=null; 


function oddEven (x,y){
    // Nothing to do if x and y are same
        let odd = head;
        let even = head.next;
        let evenStart = even;
 
    while(odd.next && even.next){
      
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenStart;
    if(odd.next !== null){
        even.next = null;
    }

  
}

/**
 * function to add Node at ethe begining of list
 */

function push(data){

    let newNode = new Node(data);

    newNode.next = head;

    head = newNode;
}

let arr = [];
function printList() {
    console.log(head);
    var tNode = head;
    // console.log(head);
     while (tNode != null) {
       arr.push(tNode.val);
         tNode = tNode.next;
     }

     return arr;
 }

// push(7);
push(6);
push(5);
push(4);
push(3);
push(2);
push(1);
oddEven()
console.log(printList());