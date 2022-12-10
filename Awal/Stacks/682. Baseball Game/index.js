var calPoints = function(operations) {
    let arr =[];

    for(let i=0;i<operations.length; i++){
        if(operations[i] !== "C" && operations[i] !== "D" && operations[i] !== "+"){
            arr.push(operations[i])
        }else if(operations[i] == "C"){
            arr.pop();
        }else if(operations[i] == "D"){
            let num = +arr[arr.length-1];
            arr.push(num *2);
        }else if(operations[i] == "+"){
            let num1 = +arr[arr.length-1];
            let num2 = +arr[arr.length-2]
            
            let sum= num1 + num2;
           
            arr.push(sum);
        }
    }
     

    let sum = arr.reduce((a,v)=> parseInt(a) + parseInt(v), 0)

    return sum;
    
};