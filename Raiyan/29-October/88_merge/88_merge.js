// #88. Merge Sorted Array

// Method - 1 T -> O(m + n)
function merge(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1;

    while (second >= 0) {
        const fVal = nums1[first];
        const sVal = nums2[second];
        if (fVal > sVal) {
            nums1[i] = fVal;
            first--;
            i--;
        } else {
            nums1[i] = sVal;
            second--;
            i--;
        }
    }

    return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// Method - 2
const merge2 = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            k--;
            j--;
        } else {
            nums1[k] = nums1[i];
            k--;
            i--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }

    while (i >= 0) {
        nums1[k] = nums1[i];
        k--;
        i--;
    }
    return nums1;
};
