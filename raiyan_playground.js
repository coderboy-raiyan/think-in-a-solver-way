// 485. Max Consecutive Ones
function maxConsecutive(nums) {
    let max = 0;
    let previousMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            previousMax++;
        } else {
            max = Math.max(max, previousMax);
            previousMax = 0;
        }
    }
    return Math.max(max, previousMax);
}

// 1295. Find Numbers with Even Number of Digits

function evenNumberCount(nums) {
    let evenCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
}
