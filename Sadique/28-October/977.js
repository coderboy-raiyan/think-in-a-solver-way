// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


// Example 1

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]


// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// method 01
function sortedSquare(nums) {
    const arr = []
    for(let i = 0; i < nums.length; i++) {
        arr.push(nums[i] * nums[i])
    }
    return arr.sort((a, b) => a - b)
}


// method 02
function sortedSquare2(nums) {
    // need to implement it using O(1) space complexity
}
console.log(sortedSquare([-4,-1,0,3,10]));