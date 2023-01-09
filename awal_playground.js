
/** 
 * Find the longest substring
 */



var lengthOfLongestSubstring = function(s) {

  let j=0, max =0;
  let map = new Map();
  for(let i=0; i<s.length; i++){

    while(map.get(s[i])){
      map.delete(s[j])
      j++;
    }
    map.set(s[i], true);
    max = Math.max(max, i-j+1);
  }

  return max;

}


console.log(lengthOfLongestSubstring("abcabcbb"));