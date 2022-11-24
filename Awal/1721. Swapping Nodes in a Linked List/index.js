class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


let head=null; 


function swapNodes (x,y){
    // Nothing to do if x and y are same

    if(x=== y){
        return;
    }


    let prevX = null, currX = head;

    while(currX && currX.val !== x){
        prevX = currX;
        currX = currX.next;
    }

// Search for y (Keep track of prevY and currY)
    let prevY = null, currY = head;
    while(currY && currY.val !== y){
        currY = currY;
        currY = currY.next;
    }

    if(!currX && !currY){
        return;
    }
   
// if prevX is not null, then the linked list
if (prevX != null)
prevX.next = currY;
else{
    head = currY;
}

// If y is not head of linked list
if (prevY != null)
prevY.next = currX;
else {
    head = currX;
}
let temp = currX.next;
console.log(head,"temp", currX.val,"ov", currY.next.val,"ag", temp.val);

    currX.next = currY.next;
    currY.next = temp; 


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

    var tNode = head;
    // console.log(head);
     while (tNode != null) {
       arr.push(tNode.val);
         tNode = tNode.next;
     }

     return arr;
 }

// push(7);
// push(6);
// push(5);
// push(4);
push(3);
push(2);
push(1);
swapNodes(2,1)
console.log(printList());