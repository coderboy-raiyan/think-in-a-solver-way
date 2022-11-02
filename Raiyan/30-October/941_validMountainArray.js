// #941. Valid Mountain Array method - 1

function validMountainArray(arr) {
    if (arr.length < 3) return false;
    let startValley = 0;

    if (arr[1] < arr[0]) return false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) return false;

        if (arr[i - 1] > arr[i]) {
            startValley = i - 1;
            break;
        }
    }

    for (let i = startValley; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) return false;
    }
    return true;
}
console.log(validMountainArray([0, 3, 2, 1]));
