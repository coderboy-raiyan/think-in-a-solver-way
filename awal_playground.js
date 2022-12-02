//  Merge two sorted Array

let merge = function(l1, m, l2, n){
  let last = m+n-1;
  let first = m-1;
  let second = n-1;
  while(first>=0 && second>=0){
    if(l1[first]>l2[second]){
      // console.log(l1[first],l2[second]);
      l1[last] = l1[first];
      first--;
    }else{
        //  console.log(l1[first],l2[second]);
      l1[last] = l2[second]
      second--;
    }
    last--;
  }

  console.log(l2[second],second,"lado");

  while(second>0){
    l1[last] = l2[second]
    last--;
    second--;
  }

  return l1;

}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));