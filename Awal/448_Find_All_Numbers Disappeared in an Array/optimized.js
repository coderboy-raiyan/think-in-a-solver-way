// Brute-Force method

var findDisappearedNumbers = function(nums) {
  
    for(n in nums){
       let i = Math.abs(nums[n]) - 1;
       
       nums[i]  = -1 * Math.abs(nums[i]) 
    }

    let missing = [];
    for(let i=0;i<nums.length; i++){
        if(nums[i]>0){
            missing.push(i+1);
        }
    }

    return missing;
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));