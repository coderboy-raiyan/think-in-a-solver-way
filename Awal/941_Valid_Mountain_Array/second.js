var validMountainArray = function(arr) {
let length = arr.length;
    if(length<3){
        return false;
    }

    let left=0,right=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i+1]<= arr[i]){
           
            left = i;
           
            break;
        }
    }

    for(let i=length-1;i>=0;i--){
        if(arr[i-1] <= arr[i]){
            right = i;
            break;
        }
    }
   
    if(left== right && left>0 && right+1 <length){
        return true;
    }

    return false;

}


console.log(validMountainArray([0,3,5,6,2,1]));