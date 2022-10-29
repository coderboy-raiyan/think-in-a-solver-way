var duplicateZeros = function(arr) {

    let queue = []
    let i = 0 
    while (i < arr.length) {

        if(arr[i]==0){
            queue.push(arr[i])
            queue.unshift();
        }

        queue.push(arr[i])
        // arr[i] = queue[i]
        i++;
    }

    console.log(queue);
    return arr;


}


console.log(duplicateZeros([1,3,4,5,0,1,1,1]));