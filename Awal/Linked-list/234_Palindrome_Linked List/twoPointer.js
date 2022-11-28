var isPalindrome = function(head) {
    let slow= head, fast =head;
   
   while(fast && fast.next){
       slow = slow.next;
       fast = fast.next.next;
   }
   
  
   
   let prev = null;
   while(slow){
       let temp = slow.next;
       slow.next = prev;
       
       prev = slow
       slow = temp;
   }
   
   let left = head, right = prev
   
    console.log(prev,"slo")
   while(right){
       if(right.val !== left.val){
           return false
       }
       right = right.next;
       left = left.next
   }
   return true;
};