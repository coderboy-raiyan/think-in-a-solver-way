var replaceElements = function(arr) {
    let currMax =0;

    for(let i=arr.length-1; i>=0; i--){
       let prevMax = currMax;
    currMax = Math.max(currMax, arr[i])
       if(currMax>arr[i]){
        arr[i] = currMax;
       }else{
        arr[i] = prevMax;
       }
    }
    arr[arr.length-1] = -1;
    return arr;

};




console.log(replaceElements([17,18,5,4,6,1]));