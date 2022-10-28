// Find Numbers with Even Number of Digits


// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.


// Example 2:
// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.
 

// Constraints:
// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105



// method 01
var findNumbers = function(nums) {
    let count = 0
    for (let num of nums) {
        if (String(num).length % 2 === 0) count++
    }
    return count
};

// method 02
var findNumbers2 = function(nums) {
    return nums.filter(num => num.toString().length % 2 === 0).length
};


// method 03
// with two loops (bad)
var findNumbers3 = function(nums) {
    return nums.map(String).filter(num => num.length % 2 === 0).length
};


// method 04
var findNumbers4 = function(nums) {
    return nums.reduce((count, num) => String(num).length % 2 ? count : count + 1, 0)
};

// I will check this solutions later on this link
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/discuss/458421/JavaScript-Easy-to-understand-3-solutions


