var replaceElements = function(arr) {
    let max =0;

    for(let i=arr.length-1; i>=0; i--){
       let prevMax = max;
    max = Math.max(max, arr[i])
       if(max>arr[i]){
        arr[i] = max;
       }else{
       
        arr[i] = prevMax;
       }
       console.log(arr[i],"max");
    }
    arr[arr.length-1] = -1;
    return arr;

};




console.log(replaceElements([17,18,5,4,6,1]));