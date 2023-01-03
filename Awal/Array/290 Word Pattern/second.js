var wordPattern = function(pattern, s) { 

   let words = s.split(" ");
        if(new Set(words).size !== new Set(pattern).size){
            return false;
        }
        
        let map = new Map();
   for(let i=0; i<pattern.length; i++){

        if(!map.has(pattern[i])){
            map.set(pattern[i], words[i])
        }

        if(words[i] !== map.get(pattern[i])) return false
    
   }

   return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));