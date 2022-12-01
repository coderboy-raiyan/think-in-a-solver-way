var flatten = function(head) {
    if(!head) return null
     
     let currNode = head;
     
     while(currNode !== null){
         
         if(currNode.child === null){
             
             currNode = currNode.next;
         }else{
             
             let tail = currNode.child;
             while(tail.next !== null){
                 
                 tail = tail.next;
             }
             
             tail.next = currNode.next
             
             if(tail.next !== null) tail.next.prev = tail;
             currNode.next = currNode.child
             currNode.child.prev = currNode;
             
             currNode.child = null
         }
     }
     
     return head
 
 };