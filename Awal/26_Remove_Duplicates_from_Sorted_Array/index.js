var removeDuplicates = function(nums) {

let left =0;

for(let right=0;right<nums.length;right++){
    if(nums[right] !== nums[right+1]){
        nums[left] = nums[right];

        left++;
    }

}

return left;


}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));