var duplicateZeros = function(arr) {
    // as it is a fixed length array, you have to store the length first
    let prev = arr.length;
    for(let i=0; i<arr.length; i++){
        
        if(arr[i]==0){
            // overwriting the array
             arr.splice(i+1, 0, 0)
            i++;
        }
    }

    // cut the length of the new array with fixed array length
    arr.length = prev;
    
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));