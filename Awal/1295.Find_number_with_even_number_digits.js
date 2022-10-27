var findNumbers = function(nums) {
    let output =0;
    for(let i=0;i<nums.length; i++){
        
        // if(nums[i].length)
        const length = nums[i].toString().length;
        if(Number(length) % 2 == 0){
            output +=1;
        }
           
    }
    return output;
};