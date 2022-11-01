var findNumbers = function(nums) {
    let output =0;
    for(let i=0;i<nums.length; i++){
        
    // get the length of each value a
        const length = nums[i].toString().length;

        // check whether the length of each value is a even or not
        if(Number(length) % 2 == 0){
            output +=1;
        }
           
    }
    return output;
};


console.log( findNumbers([12,345,2,6,7896]))