// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.


// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


// Example-01:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.



// Example-02:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?


// method 01 - my newbie solution
var merge = function(nums1, m, nums2, n) {
    let nums2Pointer = 0
    let lastZeroIndex = 0
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0 && i >= m) {
            const currentZeroIndex = nums1.indexOf(0, lastZeroIndex)
            lastZeroIndex = currentZeroIndex
            nums1.splice(currentZeroIndex, 1, nums2[nums2Pointer++])
        }
    }
    nums1.sort((a, b) => a - b)

    return nums1
};


// method 02 - two pointers
var merge2 = function(nums1, m, nums2, n) {
    while(m > 0 && n > 0) {
        let last = m + n - 1
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1[last] = nums1[m - 1]
            m--
        } else {
            nums1[last] = nums2[n - 1]
            n--
        }
    }
    
    // why is below 'loop' needed? need help
    while (n > 0) {
        nums1[n-1] = nums2[n-1];
        n--;
    }
    
    return nums1
};
console.log(merge2([1,2,3,0,0,0], 3, [2,5,6], 3));