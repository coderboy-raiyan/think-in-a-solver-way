// Reverse a string
function reverseStr(string) {
    const store = [];

    for (let i = string.length; i >= 0; i--) {
        store.push(string[i]);
    }

    return store.join('');
}
