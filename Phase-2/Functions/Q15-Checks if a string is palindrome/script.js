function palin(str){
    let original=str
     let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    if(original===result){
return str + " - It's a palindrome";
    }else {
        return str + " - It's not a palindrome";
    }
}
console.log(palin("level"))