var isValid = function(s) {
    const closeToOpen = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    const stack = [];

    for(const c in s){
        console.log(closeToOpen[s[c]], s[c]);
        if(closeToOpen[s[c]]){
            if(stack && stack[stack.length-1] == closeToOpen[s[c]]){
                stack.pop();
           }
           else{
            return false
           }
            
        }else{
            stack.push(s[c]);
        }
        
    }

    if(stack.length == []){
        return true;
    }else{
        return false;
    }

}



console.log(isValid("()[]{}"));