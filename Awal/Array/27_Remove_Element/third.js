var removeElement = function(nums, val) {
    let left=0,right=0;
     
     while(left<nums.length){
         if(nums[left]!==val){
           nums[right] = nums[left]
           right++;
         }
         left++;
     }
     return right;
 };



 console.log(removeElement([[3,2,2,3],3]));