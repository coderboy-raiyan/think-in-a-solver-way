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

console.log(duplicateZero([1,0,2,3,0,4,5,0]));
