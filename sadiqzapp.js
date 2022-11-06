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

    while (n > 0) {
        nums1[n-1] = nums2[n-1];
        n--;
    }
    
    return nums1
};
console.log(merge2([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3));