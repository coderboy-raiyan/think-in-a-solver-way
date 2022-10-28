// #977. Squares of a Sorted Array

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

console.log(sortedSquares([-4, -1, 0, 3, 10]));
