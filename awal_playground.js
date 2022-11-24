// swapping two node in linked list



class Node{
  constructor(val){
    this.val = val;
    this.next = null
  }
}


let head=null;


function swapNodes(x,y){
// Nothing to do if x and y are same
if (x == y)
return;

// Search for x (keep track of prevX and CurrX)
var prevX = null, currX = head;
while (currX != null && currX.val != x) {
prevX = currX;
currX = currX.next;
}


// Search for y (keep track of prevY and currY)
var prevY = null, currY = head;
while (currY != null && currY.val != y) {
prevY = currY;
currY = currY.next;
}

console.log(prevX,"prev",prevY);


// If either x or y is not present, nothing to do
if (currX == null || currY == null)
return;

// If x is not head of linked list
if (prevX != null)
prevX.next = currY;
else // make y the new head
head = currY;

// If y is not head of linked list
if (prevY != null)
prevY.next = currX;
else // make x the new head
head = currX;

// Swap next pointers
var temp = currX.next;
currX.next = currY.next;
currY.next = temp;


}




function push(new_data) {
  /* 1. alloc the Node and put the data */
var new_Node = new Node(new_data);

  /* 2. Make next of new Node as head */
  new_Node.next = head;

  /* 3. Move the head to point to new Node */
  head = new_Node;
}



function printList(){
  let curr = head;
  let arr = [];
  while(curr){
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}



push(9)
push(4)
push(3)
push(2)
push(1)
swapNodes(1,9)
console.log(printList());