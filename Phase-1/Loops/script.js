// Question-51 : Print all numbers from 1 to 100 using a loop.
for(i=1;i<=100;i++){
    console.log(i)
}




// Question-52 : Print all even numbers between 1 and 100.
for(i=1;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
    
}




//  Question-53 : Print all odd numbers between 1 and 100.
for(i=1;i<=100;i++){
    if(i%2!==0){
        console.log(i)
    }
}




// Question-54 : Generate the multiplication table of a number entered by the user.
let num1=Number(prompt("Enter a num"))
for(i=1;i<=10;i++){
    console.log(num1*i)
}





// Question-55 : Find the factorial of a number entered by the user.
let num=Number(prompt("Enter a number"))
let fact=1
for(i=num;i>=1;i--){
    fact=num*i
    console.log(fact)
}




// Question-56 : Count how many digits are present in a number.
let num=Number(prompt("Enter a number : "))
let count=0
while(num>0){
    count++
    num=Math.floor(num/10)
  
}
  console.log(count)




// Question-57 : Reverse a given number.
let num=Number(prompt("Enter a number"))
let reverse=0
while(num>0){
    let digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)
}
console.log(reverse)
