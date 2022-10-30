var validMountainArray = function(arr) {
    let length = arr.length;
     if(length<3){
         return false;
     }
 i=0;
     
 // walk up
 while(i+1 < length && arr[i] < arr[i+1]){
     i++;
 }
     
       if(i==0 || i== length-1){
         return false;
     }
 
 // walk down
 while(i+1 < length && arr[i] > arr[i+1]){
     i+=1;
 
     
 }
 
 return i==length-1;
 };

console.log(validMountainArray(3,0,2));


