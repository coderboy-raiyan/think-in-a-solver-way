var sortArrayByParity = function(nums) {
    let left=0,right=0;
    while(left<nums.length){
        if(nums[left] %2===0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            right++;
        }
        left++;
    }
    return nums;
};





console.log(sortArrayByParity([3,1,2,4,3,5,8]));