var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let newNum=0;
    for(let i=0;i<nums.length; i++){

        if(nums[i]==0){
            max = Math.max(max, newNum);
             newNum =0;
        }else{
            newNum++
        }
         max = Math.max(max, newNum);
    }
        return max;
};