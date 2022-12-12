var removeElements = function(head, val) {
    let curr = head;
    
    while(curr){
        if ( curr.next && curr.next.val === val){
           
            curr.next = curr.next.next;

        }else{
             curr = curr.next
        }
       
    }
    
   if(head && head.val == val){
       return head.next
   }else{
      return head
   }
};