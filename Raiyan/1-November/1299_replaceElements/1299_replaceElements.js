// # 1299. Replace Elements with Greatest Element on Right Side

// Method - 1
function replaceElements(arr) {
    let rightMax = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const newMax = Math.max(arr[i], rightMax);
        arr[i] = rightMax;
        rightMax = newMax;
    }
    return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
