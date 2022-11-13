var getIntersectionNode = function(headA, headB) {


let a = headA;
let b = headB;


    while(a!== b){
        if(a){
            a = a.next;
        }else{
            a = headB
        }


        if(b){
            b = b.next;
        }else{
            b = headA
        }
    }

    return a;

}