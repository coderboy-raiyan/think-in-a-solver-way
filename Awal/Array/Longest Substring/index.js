var lengthOfLongestSubstring = function(s) {

    let obj = {};
    let startIndex = 0;
    let maxLength = 0;


for(let i=0; i<s.length; i++){
    const char = s.charAt(i);
    if(obj[char] !== undefined && obj[char] >= startIndex){
        maxLength = Math.max(maxLength, i-startIndex);
        startIndex = obj[char]+1;
    }

    obj[char] = i
   

}

console.log(obj,"l3");
}


console.log(lengthOfLongestSubstring("abcabcbb"));