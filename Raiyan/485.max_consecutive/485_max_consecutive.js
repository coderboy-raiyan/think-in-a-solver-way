// # 485 Max Consecutive Ones

// method - 1
function findMaxConsecutiveOnes(nums) {
    let maxConsecutive = 0;
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            maxConsecutive += 1;
            array.push(maxConsecutive);
        } else {
            maxConsecutive = 0;
        }
    }

    return array.sort((a, b) => b - a)[0] || 0;
}

// method - 2
function findMaxConsecutiveOnes2(nums) {
    let max = 0;
    let newMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            newMax++;
        } else {
            max = Math.max(max, newMax);
            newMax = 0;
        }
    }
    return Math.max(max, newMax);
}

console.log(findMaxConsecutiveOnes2([1, 1, 0, 1, 1, 1]));
