var getIntersectionNode = function(headA, headB) {
    let map = new Map();
       
       let current = headA;
       
       while(current){
           
           map.set(current,true);
           
         current = current.next
       }
       
       current = headB;
       
       while(current){
           
           if(map.get(current)){
               return current;
           }
           
           current = current.next;
       }
       
       return null;
       
   };
