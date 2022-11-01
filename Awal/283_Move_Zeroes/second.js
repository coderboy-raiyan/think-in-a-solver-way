var moveZeroes = function(nums) {
    let i=0,count=0;
     
     while(count<nums.length){
         if(nums[i]===0){
             nums.push(...nums.splice(i,1))
         }else{
             i++;
         }
         count++;
     }
     return nums;
 };


 console.log(moveZeroes([1,2,3,0,5]));