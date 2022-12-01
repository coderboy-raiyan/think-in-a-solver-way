var copyRandomList = function(head) {
    let map = new Map();
        
        let curr = head;
        
        while(curr){
            let copy = new Node(curr.val);
            map.set(curr, copy);
            curr = curr.next;
        }
            curr = head;
        // console.log(map.get(curr), map.get(curr.random))
    
        while(curr){
            let copy = map.get(curr);
            copy.next = map.get(curr.next) || null;
            copy.random = map.get(curr.random)|| null;
            curr = curr.next;
        }
        
        return map.get(head)
        
    };