var romanToInt = function(s) {
    let conv = {
        "I":1,
        "V":5,
         "X":10,
         "L":50,
         "C":100,
         "D":500,
         "M":1000,
    }

    let sum = 0;

    for(let i=0; i<s.length; i++){
        if(s[i] == "I" && (s[i+1] == "V" || s[i+1] == "X")){
            sum += conv[s[i+1]] - conv[s[i]];
            i++;
        }else if(s[i]== "X" && (s[i+1] == "L" || s[i+1] == "C")){
            sum += conv[s[i+1]] - conv[s[i]]; 
            i++;
        }else if(s[i] == "C" && (s[i+1] == "D" || s[i+1] == "M")){
            sum += conv[s[i+1]] - conv[s[i]];
            i++;
        }else{

            sum += conv[s[i]];
        }
    }

    return sum;

}



console.log(romanToInt("MCMXCIV"));