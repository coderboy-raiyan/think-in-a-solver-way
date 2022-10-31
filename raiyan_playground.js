// #485 Max Consecutive Ones
function maxConsecutive(nums) {
    let maxNum = 0;
    let previousMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1) {
            maxNum = Math.max(maxNum, previousMax);
            previousMax = 0;
        } else {
            previousMax++;
        }
    }
    return Math.max(maxNum, previousMax);
}

console.log(maxConsecutive([1, 1, 0, 1, 1, 1]));
