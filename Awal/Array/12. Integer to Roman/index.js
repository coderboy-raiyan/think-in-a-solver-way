var intToRoman = function(num) { 
    // const hash ={
    //     1 :"I",
    //     4:"IV",
    //     5:"V",
    //     9:"IX",
    //     10:"X",
    //     40:"XL",
    //     50:"L",
    //     100:"C",
    //     90:"XC",
    //     400: "CD",
    //     500:"D",
    //     900:"CM",
    //     1000:"M"
    // } 
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const rom = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    let ans = "";
    // for(let i=0; i<num; i++){
    //     console.log(hash[i],"check");

    // }
    let i=0;
    while(num){
        console.log(rom[i],"roman",val[i],"num", num);
        while(num >= val[i]){
            ans += rom[i]
            num -= val[i]
        }
        i++;
    }
    return ans;
}

console.log(intToRoman(8));