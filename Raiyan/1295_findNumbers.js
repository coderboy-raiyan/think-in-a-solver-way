// #1295 Find Numbers with Even Number of Digits

function findNumbers(nums) {
    let evenCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
}

console.log(findNumbers([555, 901, 482, 1771]));
