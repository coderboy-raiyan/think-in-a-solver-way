var removeNthFromEnd = function(head, n) {
    let dummy =new ListNode(0, head);
    let left = dummy;
    let right = head;
    
    while(n>0 && right){
    right = right.next;
        n-=1;
    }

    while(right){
          left = left.next;
        right = right.next;
    }
    
    left.next = left.next.next
    
    
    return dummy.next;
    
};