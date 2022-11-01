var moveZeroes = function(nums) {
    let left=0, right=0;

    while(left<nums.length){
        if(nums[left] !== 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            right++;
        }
        left++;
    }

    return nums;
 };


 console.log(moveZeroes([1,2,3,0,5]));