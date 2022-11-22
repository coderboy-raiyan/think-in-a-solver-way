var removeNthFromEnd = function(head, n) {
    let curr = head;
    let fakeHead = head;
    let counter = 0;
    let length=0;

    // getting the length of whole node
    while(fakeHead){
        length++;
        fakeHead = fakeHead.next;
    }
    
    // if the length is equal to the n, then return head next val
     if(n == length) {
            head = head.next;
            return head;
        }
    
    // substracting the length from the n value
    let target = length -1 - n;
    
    //  as long as target is not equal to counter, loop will continue
    while(counter !== target){
        counter++;
        curr = curr.next;
    }
        curr.next =curr.next.next
    
    return head;
    
};