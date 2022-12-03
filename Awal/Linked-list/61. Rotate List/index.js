var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let length = 0;
    let tail = head;
    while(tail){
        tail = tail.next;
          length++;
    }

    // if the k's value is greater than head length
    k = k % length;
    if(k==0){
        return head;
    }

    
    let counter = 0;
    while(k !==counter){
     let curr = head;
     while(curr.next.next !== null){
        curr = curr.next
    }
   let tar =  curr.next.val;
    curr.next = null;
   let newNode = new ListNode(tar);
   newNode.next = head;
   head = newNode;
   counter++;
 
    }
  
    return head;
};