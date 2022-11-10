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

// Is valid Sub sequence of an array Solved
function isValidSubsequence(array, sequence) {
    let mainPointer = 0;
    let subPointer = 0;

    while (mainPointer < array.length && subPointer < sequence.length) {
        if (array[mainPointer] === sequence[subPointer]) {
            subPointer++;
        }
        mainPointer++;
    }
    return subPointer === sequence.length;
}

console.log(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));
