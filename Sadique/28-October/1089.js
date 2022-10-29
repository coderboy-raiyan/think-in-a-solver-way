// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.



// Example 1:
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]



// Example 2:
// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Show hints to understand more about this question

// Method 01
function duplicateZero(arr) {
    function duplicateZero(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i]) {
                arr.splice(i + 1, 0, 0)
                arr.pop()
                i++
            }
        }
        return arr
    }
}


// Method 02
// without using any built-in method
function duplicateZero2(arr) {
    let zeros = 0
	let c1 = arr.length - 1
	let c2 = arr.length - 1

	for (let a of arr) {
		if (a === 0) {
			zeros++
		}
	}

	c2 += zeros
		
	while (c1 >= 0) {
		if (arr[c1] === 0) {
			if (c2 < arr.length) {
				arr[c2] = arr[c1]
			}

			c2--

			if (c2 < arr.length) {
				arr[c2] = arr[c1]
			}
		}
		else {
			if (c2 < arr.length) {
				arr[c2] = arr[c1]
			}
		}

		c1--
		c2--
	}

    return arr
}

console.log(duplicateZero([1,0,2,3,0,4,5,0]));
