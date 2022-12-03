var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let length = 1;
    let tail = head;
    while(tail.next){
        tail = tail.next;
          length++;
    }

    k = k % length;
    if(k==0){
        return head;
    }

    let counter =0;
    let target = length-k-1;
    let curr = head;
    while(target !==counter){
        
        curr = curr.next;
        counter++
    }
   
    let newHead = curr.next;
    curr.next = null;
    //  console.log(newHead,head)
    tail.next = head;
    // console.log(newHead,"tail",head)
    return newHead;
};