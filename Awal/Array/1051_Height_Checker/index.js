var heightChecker = function(heights) {
    let prev = heights;
    let expected = heights.slice().sort((a,b)=> a-b);
    console.log(expected,"prev",prev)
    let count=0;
    for(let i=0; i<heights.length; i++){
        
        if(prev[i] !== expected[i]){
            count++;
        }
    }
    return count;
};


console.log(heightChecker([1,2,3,4,5]));