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

console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));