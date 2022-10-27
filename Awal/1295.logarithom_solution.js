var findNumbers = function(nums) {
    let output =0;
    for(let i=0;i<nums.length; i++){
    
        // log10(logarithom of base 10) to count the number of digits of positive number
    const length = Math.floor(Math.log10(nums[i])+1);

        // check whether the length of each value is a even or not
        if((length) % 2 == 0){
            output +=1;
        }
    
    
           
    }
    return output;
};


console.log( findNumbers([12,345,2,6,7896]))