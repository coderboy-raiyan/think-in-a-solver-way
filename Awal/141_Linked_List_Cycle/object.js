


var hashCycle = function(head){



    let hash = {};
    let curr = head;
    let i = 0;

    while(curr){    
        if(head in hash){
            return true
        }

        hash[head] = i;
        i++;

        curr = curr.next
    }
    return false;

}


// Map VS Object

/**
 * if you wanna know more about difference between these two then go  to https://stackoverflow.com/questions/52355150/when-to-use-object-map-vs-map-class-in-es6
 */