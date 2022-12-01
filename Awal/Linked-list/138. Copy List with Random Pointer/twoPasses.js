var copyRandomList = function(head) {
    let oldCopy = {};
     let cur = head;
     
     while(cur){
         let copy = new Node(cur.val);
         oldCopy[cur] = copy
         cur =cur.next
     }
     
     cur = head;
     while(cur){
         let copy = oldCopy[cur];
         copy.next = oldCopy[cur.next] || null
         copy.random =var copyRandomList = function(head) {
            let oldCopy = {};
             let cur = head;
             
             while(cur){
                 let copy = new Node(cur.val);
                 oldCopy[cur] = copy
                 cur =cur.next
             }
             
             cur = head;
             while(cur){
                 let copy = oldCopy[cur];
                 copy.next = oldCopy[cur.next] || null
                 copy.random = oldCopy[cur.random] || null
                 cur = cur.next
             }
             
             return oldCopy[head]
         }; oldCopy[cur.random] || null
         cur = cur.next
     }
     
     return oldCopy[head]
 };