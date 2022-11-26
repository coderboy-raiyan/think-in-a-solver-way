var detectCycle = function(head) {
    let map = new Map();
    let curr = head;
    while(curr){
        if(map.get(curr)){
            return curr;
        }
        
        map.set(curr,true)
       
        
        curr = curr.next;
         i++;
    }
    
return null;
};


