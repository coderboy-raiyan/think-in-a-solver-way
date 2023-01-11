var longestCommonPrefix = function(strs) {

let prefix = strs[0];

for(let i=1; i<strs.length; i++){

    console.log(strs[i].indexOf(prefix));
    while(strs[i].indexOf(prefix) !== 0){
        prefix = prefix.substring(0, prefix.length-1);
    }
}
return prefix;
}


console.log(longestCommonPrefix( ["flower","flow","flight"]));