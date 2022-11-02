// #485 Max Consecutive Ones
function maxConsecutive(nums) {
    let maxNum = 0;
    let previousMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1) {
            maxNum = Math.max(maxNum, previousMax);
            previousMax = 0;
        } else {
            previousMax++;
        }
    }
    return Math.max(maxNum, previousMax);
}
maxConsecutive([1, 1, 0, 1, 1, 1]);

// 941. Valid Mountain Array
function validMountainArray(arr) {
    let startValley = 0;
    if (arr.length < 3) {
        return false;
    }

    if (arr[1] < arr[0]) {
        return false;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            return false;
        }
        if (arr[i - 1] > arr[i]) {
            startValley = i - 1;
            break;
        }
    }

    for (let i = startValley; i <= arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }

    return true;
}
console.log(validMountainArray([0, 3, 2, 1]));
