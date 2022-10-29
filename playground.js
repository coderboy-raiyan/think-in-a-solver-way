// Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.


// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.



// method 01
function findMaxConsecutiveOnes(nums) {
    // [1,1,0,1,1,1]
    let maxOnes = 0
    let currentOnes = 0
    
    for (let i = 0; i < nums.length; i++) {
        currentOnes = nums[i] === 0 ? 0 : currentOnes + 1
        maxOnes = currentOnes > maxOnes ? currentOnes : maxOnes
        console.log(i, currentOnes, maxOnes);
    } // O(n)
    return maxOnes
}

// method 02
function findMaxConsecutiveOnes2(nums) {
    // [1,1,0,1,1,1, 1]
    let currentOnes = 0
    let maxOnes = 0
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            currentOnes++
        } else {
            maxOnes = Math.max(currentOnes, maxOnes)
            currentOnes = 0
        }
    }
    return Math.max(currentOnes, maxOnes)
}

// method 03
function findMaxConsecutiveOnes3(nums) {
    // [1,1,0,1,1,1, 1]
    let currentOnes = 0
    let maxOnes = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            currentOnes++
            if (currentOnes > maxOnes) {
                maxOnes = currentOnes
            }
            continue
        }
        currentOnes = 0
    }
    return maxOnes
}

// method 04
// window with two pointers
function findMaxConsecutiveOnes4(nums) {
    // [1,1,0,1,1,1]
    let maxConsecutiveNums = 0;   
    let left = 0;
    let right = 0;

    while(right < nums.length){ 
        if(nums[right] !== 1){ 
            left = right + 1
        }    
        maxConsecutiveNums = Math.max(maxConsecutiveNums, right - left + 1);
        right++;
    }
    return maxConsecutiveNums;
}

console.log(findMaxConsecutiveOnes4([1,1,0,1,1,1]));