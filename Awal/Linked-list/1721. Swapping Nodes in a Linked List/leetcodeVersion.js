/**
 * BruteForce method
 */


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}



function swapNodes(k){

    let length = 0;
    let curr =head;
    while(curr){
        length++;
        curr  = curr.next
    }

    let firstNode = k;
    let lastNode = length - k+1;    

    console.log(lastNode,"length");
    let prevX = null, currX = head, counterX=1;
    while(currX && counterX !== firstNode){
        prevX = currX;
        currX = currX.next;
        counterX++;
    }



    let prevY = null, currY = head, counterY=1;

    while(currY && counterY !== lastNode){
        prevY = currY;
        currY = currY.next;
        counterY++;
    }
    console.log(prevY.val,"chieck");

    // if both of them are null
    if(!currX && !currY){
        return;
    }

// if prevX is not null, then the linked list
    if(prevX){
        prevX.next = currY
    }else{
        head = currY;
    }

    // if prevY is not null, then the linked list
    if(prevY){
        prevY.next = currX
    }else{
        head = currX;
    }


    let temp = currX.next;

    currX.next = currY.next;
    currY.next = temp; 
}


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


push(7);
push(6);
push(5);
push(4);
push(3);
push(2);
push(1);

swapNodes(2)
console.log(printList());