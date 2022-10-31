var validMountainArray = function(arr) {
    let length = arr.length;
      let left=0, right=length-1;
  
      while(left+1 < length-1 && arr[left+1]> arr[left]){
          left +=1;
      }
  
  
      while(right-1>0 && arr[right-1] > arr[right]){
          right -=1;
      }
  
     
  
  
      return 0<left && left === right && left<length-1;
  };


console.log(validMountainArray([2]));