// # 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Method - 1

function moveZeros(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] === 0) {
                nums[j] = nums[j + 1];
                nums[j + 1] = 0;
            }
        }
    }
    return nums;
}

// Method - 2
function moveZeros2(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let left = 0;
    let right = 0;

    while (left < nums.length) {
        if (nums[left] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            right++;
        }

        left++;
    }

    return nums;
}

console.log(moveZeros2([0, 1, 0, 3, 12]));
