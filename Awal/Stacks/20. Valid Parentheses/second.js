var isValid = function(s) {

    let paren = {
        "(":")",
        "{": "}",
        "[":"]"
    }
        let arr = [];
        for(let i=0; i<s.length; i++){
            if(paren[s[i]]){
              
     arr.push(paren[s[i]])
                
            }else{
                
              if(arr && arr[arr.length-1] === s[i]){
                arr.pop();
               }else{
                  
                return false;
            }
            }
     
        }
           if(arr.length == []){
            return true;
        }else{
            return false;
        }
    }
    