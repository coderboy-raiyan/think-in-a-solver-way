var detectCapitalUse = function(word) {
    let n = word.length;
    
    let match=true, match2=true, match3=true;
    // case:1: All capital
    for(let i=0; i<n; i++){
        
        if(word.charAt(i) !== word.charAt(i).toUpperCase()){
            match = false;
            break;
        }
    }
   
    if(match){
        return true;
    }
    
//     case 2: all small letter
       for(let i=0; i<n; i++){
        if(word.charAt(i) !== word.charAt(i).toLowerCase()){
            match2 = false;
            break;
        }
    }
    
    if(match2){
        return true
    }
    
    
    
    
    // case 3: all not capital except first
    if(word.charAt(0) !== word.charAt(0).toUpperCase()) {
        match3 = false;
    }
    
     console.log(match3,'kao')
    
    if(match3){
           for(let i=1; i<n; i++){
        if(word.charAt(i) !== word.charAt(i).toLowerCase()){
            match3 = false;
            break;
        }
    }
    }
       
        if(match3){
            return true;
        }
        
//       if not matching 
        return false;
    
};


console.log(detectCapitalUse("Leetcode"));