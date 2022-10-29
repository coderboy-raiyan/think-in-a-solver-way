// #977. Squares of a Sorted Array

// Method - 1 using Two pointers
function sortedSquares(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;
    let resultIdx = nums.length - 1;

    while (left <= right) {
        const leftVal = nums[left] ** 2;
        const rightVal = nums[right] ** 2;

        if (leftVal < rightVal) {
            result[resultIdx] = rightVal;
            right--;
        } else {
            result[resultIdx] = leftVal;
            left++;
        }

        resultIdx--;
    }
    return result;
}

// Method - 2 using Array Sort Btw It will be O(n^2)
const sortedSquares2 = function (nums) {
    let i = 0;

    while (nums.length !== i) {
        nums[i] = nums[i] ** 2;
        i++;
    }
    return nums.sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
