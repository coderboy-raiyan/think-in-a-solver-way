var thirdMax = function(nums) {
    let set = new Set();
      
      for(let i=0;i<nums.length;i++){
          
          if(set.has(nums[i])){
              continue;
          }
          
          set.add(nums[i])
      }
      

      let unique = [...set.values()].sort((a,b)=>b-a);
      let max=0;
    if(unique.length>=3){
    
     return unique[2]
    }else if(unique.length<=1){
        return unique[0];
    }else{
        return Math.max(unique[0], unique[1]);
    }
      
  }

console.log(thirdMax([1,2,2,5,3,5]))