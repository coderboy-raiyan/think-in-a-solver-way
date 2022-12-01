/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class listNode{
    constructor(val, next=null, prev=null, child=null){
        this.val = val;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}

// ---- Generate our linked list ----
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6] 

const buildMultiLevel = function(nodes){
    const head = new listNode(nodes[0]);

}