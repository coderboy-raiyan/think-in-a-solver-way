// # 485 Max Consecutive Ones

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

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
