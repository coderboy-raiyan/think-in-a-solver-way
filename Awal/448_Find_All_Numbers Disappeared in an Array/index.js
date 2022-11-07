// Brute-Force method

var findDisappearedNumbers = function(nums) {
    nums.sort((a,b)=> a-b)
   let last = nums.length;
   let arr = [];

   for(let i=1; i<=last; i++){
    arr.push(i);
   }    
   const res = [];
   for(let i=0;i<nums.length;i++){
       
    if(!nums.includes(arr[i])){
        res.push(arr[i])
    }
        
   }
   return res;
}


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));