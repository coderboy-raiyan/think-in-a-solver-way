// #27. Remove Element

function removeElement(nums, val) {
    if (nums.length <= 0) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}
