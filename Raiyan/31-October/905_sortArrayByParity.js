// # 905. Sort Array By Parity
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
    if (nums.length <= 1) {
        return nums;
    }
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

console.log(sortArrayByParity([3, 1, 2, 4]));
