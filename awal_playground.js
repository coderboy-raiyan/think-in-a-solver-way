
/** 
 * Find the longest substring
 */

var isPalindrome = function(x) {

  let con = x.toString().split("");
  console.log(con);

  let newArr = [];
  for(let i = con.length-1; i>=0; i--){
    newArr.push(con[i]);
  }

  // console.log(newArr.join(""));
  return newArr.join("") == x.toString();
}


console.log(isPalindrome(121));