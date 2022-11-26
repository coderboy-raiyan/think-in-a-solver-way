var oddEvenList = function(head) {
    
    if(!head || !head.next || !head.next.next ){
    return head;
    }  
        console.log(head.next.next,"check")
        let oddH= head, evenH = head.next, evenStart= evenH, counter=3;
        let currNode = head.next.next;
        while(currNode){
            if(counter%2==0){
                evenH.next = currNode
                evenH = currNode;
            }else{
                oddH.next = currNode
                oddH = currNode;
            }
            
            currNode = currNode.next;
            counter++;
        }
        
        oddH.next = evenStart;
        evenH.next = null
        return head;
        
    };