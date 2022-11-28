var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    while(curr){
        arr.push(curr.val);
        curr = curr.next;
    }
   
    let left = 0, right = arr.length-1;
    while(left<=right){
        // console.log(arr[counter] !== reverse[counter])
        if(arr[left] !== arr[right]){
            return false
        }
        
        left++;
        right--;
    }
    return true;
};

