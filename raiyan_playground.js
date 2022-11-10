// 283. Move Zeroes
function moveZeroes1(nums) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[left] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            right++;
        }
        left++;
    }
    return nums;
}

// 905. Sort Array By Parity

function sortArrayByParity(nums) {
    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            right++;
        }
        left++;
    }
    return nums;
}
