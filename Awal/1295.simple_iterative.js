var findNumbers = function(nums) {
    let output =0;
    for(let i=0;i<nums.length; i++){
    
        // log10(logarithom of base 10) to count the number of digits of positive number
    const length = Math.floor(Math.log10(nums[i])+1);
let count=0;
     while(nums[i] !=0){
        nums[i] = Math.floor(nums[i]/10);
        // console.log(nums[]);
        ++count;
     }
    console.log(count,"coutn");
    
           
    }
    return output;
};


console.log( findNumbers([12,345,2,6,7896]))