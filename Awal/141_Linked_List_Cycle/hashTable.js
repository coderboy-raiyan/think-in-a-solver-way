var hashCycle = function(head){



    let hash = new Map();
    let curr = head;
    let i = 0;

    while(curr){    
        if(hash.get(curr)){
            return true
        }

        hash.set(curr,i)
        i++;

        curr = curr.next
    }
    return false;

}