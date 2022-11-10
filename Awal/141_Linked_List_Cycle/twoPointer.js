// Hare and tortoise method



var hasCycle = function(head) { 

    let fast, slow = this.head, this.head;

    while(fast && slow){
        fast = fast.next.next;
        slow = slow.next;

        if(fast == slow){
            return true;
        }
    }

    return false;


}