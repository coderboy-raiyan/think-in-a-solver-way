var removeElements = function(head, val) {
    let curr = head;

    while(curr){
            while(curr.next && curr.next.val == val){
        curr.next = curr.next.next;
                
                continue;
            }
        
        curr = curr.next;
    }
    
       if(head && head.val == val){
       head = head.next;
   }
    
    return head;
};