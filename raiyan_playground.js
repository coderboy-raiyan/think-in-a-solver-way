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
// 977. Squares of a Sorted Array

// function sortedArray(nums) {
//     let left = 0
//     let right = nums.length - 1
//     let trackIndex = nums.length - 1
//     const newArray = [];

//        while(right > left){
//         let leftVal = Math.pow(nums[left], 2)
//         let rightVal = Math.pow(nums[right], 2)

//         if(leftVal > right){
//             newArray[trackIndex] = leftVal
//             leftVal++
//         }else{
//             newArray[trackIndex] = rightVal
//             ++
//         }
//        }

//     return newArray
// }

// console.log(sortedArray([-4, -1, 0, 3, 10]));
