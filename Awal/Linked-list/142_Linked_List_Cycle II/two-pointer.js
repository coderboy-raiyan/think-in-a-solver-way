
// Fast and slow method used to return the node where cycle begins


var detectCycle = function(head) {
    let slow = head;
       let fast = head;
       let start = head;
       while(fast && fast.next){
           slow = slow.next;
           fast = fast.next.next;
           
           if(fast === slow){
               break;
           }
       }
       
       if(fast== null || fast.next == null){
           return null
       }
       
       while(start !== slow){
           start = start.next;
           slow = slow.next;
       }
       
       return start;
       
       
   };