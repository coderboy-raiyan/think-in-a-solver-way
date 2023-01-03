var wordPattern = function(pattern, s) {

    let charToWord = new Map();
    let wordToChar = new Map();

    let words = s.split(" ");

    if(pattern.length !== words.length){
        console.log("dok");
        return false;
    }

    for(let i in pattern){
        charToWord.set(pattern[i], words[i]);
        wordToChar.set(words[i], pattern[i])
    }

    for(let i=0; i<pattern.length; i++){
        if(charToWord.get(pattern[i])!== words[i] || pattern[i] !== wordToChar.get(words[i])){
            return false;
        }
    }

    return true;
};


console.log(wordPattern("abba", "dog cat cat dog"));


