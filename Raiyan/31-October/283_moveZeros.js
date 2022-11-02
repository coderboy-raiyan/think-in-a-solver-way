// # 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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
function moveZeros2(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === 0) {
            nums[left] = nums[right];
            nums[right] = nums[left];
            left++;
            right--;
        }
        console.log(nums[left], nums[right]);
    }
    return nums;
}

console.log(moveZeros2([0, 1, 0, 3, 12]));
