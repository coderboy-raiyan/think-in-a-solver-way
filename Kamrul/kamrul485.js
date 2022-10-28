const nums = [1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1];

let output = [];

let outputLength = [];

for (let i = 0;i <= nums.length;i++){
    if(nums[i]===1){
        output.push(nums[i]);
    }else{
        outputLength.push(output.length);
        output=[];
    }
}

const result = Math.max(...outputLength);
console.log(result);