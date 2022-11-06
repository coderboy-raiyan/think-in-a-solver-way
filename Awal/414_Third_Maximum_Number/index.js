var thirdMax = function(nums) {
    
    let unique = {}
    for(let i=0;i<nums.length; i++){
        
        let check = unique[nums[i]]
        
        if(check>=0){
            continue;
        }else{
            unique[nums[i]] =i;
        }
        
    }

    let length = Object.keys(unique).length;
    console.log(unique)
    if(length===1){
return Object.keys(unique)[0]
    }else if(length<3){
      return Math.max(Object.keys(unique)[0],Object.keys(unique)[1])
    }

    return Object.keys(unique)[length-3];
};



console.log(thirdMax(
    [1,2,-2147483648]))