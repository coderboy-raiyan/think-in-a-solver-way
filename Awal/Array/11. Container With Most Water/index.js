var maxArea = function(arr) {
  
    let area, maxArea=0, minLength,width, left=0, right=arr.length-1;
     
     
     while(left < right){
         minLength = Math.min(arr[left], arr[right]);
         width = right - left;
         area = minLength * width;
         maxArea = Math.max(maxArea, area);
         if(arr[left]> arr[right]){
         right--;
         }else{
         left++;
         }  
     }
     return maxArea;
 };