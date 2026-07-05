// Question-36 : Write a program that checks whether a number entered by the user is positive, negative, or zero.
let num= Number(prompt("Enter a num :"))
if(num>0){
    console.log("Its positive")
}

if(num<0){
    console.log("its negetive")
}else{
    console.log("zero")
}




// Question-37 : Write a program that determines whether a number is even or odd.
let  num= Number(prompt("Enter a number : "))
if(num%2==0){
    console.log("its even")
}else{
    console.log("its odd")
}




// Question-38 : Ask the user for their age and determine whether they are eligible to vote.
let age=Number(prompt("Enter your age : "))
if(age>=18){
    console.log("You can vote")
}else{
    console.log("You can not vote")
}




// Question-39 : Write a program to determine whether a given year is a leap year.
let year= Number(prompt("Enter year : "))
if(year%400==0){
    console.log("Its a leap year")
}else if (year%4==0 && year%100 !== 0){
    console.log("its a leap year")
} else{
    console.log("not a leap year")
}




// Question-40 : Compare two numbers and display the larger one.
var num1= Number(prompt("Enter num 1 :"))
var num2=Number(prompt("Enter num 2 : "))
if(num1>num2){
    console.log(num1, "Num 1 is greater")
}else{
    console.log(num2, "Number 2 is greater ")
}




// Question-41 :  Compare three numbers and display the largest among them. 
let num1= Number(prompt("Enter num 1 : "))
let num2= Number(prompt("Enter num 2 : "))
let num3= Number(prompt("Enter num 3 : "))
if(num1>num2){
    console.log(num1, "Num 1 is greater")
}else if(num2>num3) {
    console.log(num2, "Num 2 is greater")
}else{
    console.log(num3, "Num 3 is greater")
}




// Question-42 : Ask the user for marks and assign grades according to predefined criteria.
let marks=Number(prompt("Enter your marks"))
if(marks>=90 && marks<=100){
    console.log(marks, "A")
}else if(marks>=80 && marks<=85){
    console.log(marks, "B")
}else if(marks>=70 && marks<=75){
    console.log(marks, "C")
}else if(marks>=60 && marks<=65){
    console.log(marks, "D")
}else{
    console.log(marks, "E")
}




// Question-43 : Ask the user to enter a character and determine whether it is a vowel or consonant.
let char=prompt("Enter a character : ")
if(char === "a" || char==="e" || char==="i" || char==="o" || char==="u" || char==="A"|| char==="E"|| char==="I"|| char==="O"|| char==="U"){
    console.log(char, "Vowel")
}else{
    console.log("Consonent")
}

//  Program to Check Vowel or Consonant in JavaScript Using Character Codes
let char=prompt("Enter a character")
let code = char.toLowerCase().charCodeAt(0);
if (code === 97 || code === 101 || code === 105 || code === 111 || code === 117) {
  console.log("It's a vowel.");
}else{
  console.log("It's a consonant.");
}





// Question-44 : Determine whether a character entered by the user is uppercase or lowercase.
let char=prompt("Enter a charcter")
let code = char.charCodeAt(0);

if (code >= 65 && code <= 90) {
    console.log("Uppercase");
}
else if (code >= 97 && code <= 122) {
    console.log("Lowercase");
}




// Question-45 : Check whether a number is divisible by both 5 and 11.
let num=Number(prompt("Enter a number"))
if(num%5===0 && num%11===0){
    console.log("Its correct",num)
}else{
    console.log("its not divisble")
}





// SWITCH-STATEMENTS :
 // Question-46 : Ask the user for a day number (1–7) and display the corresponding weekday.
 let day=Number(prompt("Enter a day number"))
 switch(day){
    case 1:
    console.log("its monday ");
    break;
    case 2:
    console.log("its tuesday ");
    break;
    case 3:
    console.log("its wed ");
    break;
    case 4:
    console.log("its thu");
    break;
    case 5:
    console.log("its friday ");
    break;
    case 6:
    console.log("its sat ");
    break;
    case 7:
    console.log("its sun");
    break;
     default:
        console.log("wrong  day number");
 }


 // Question-47 : Create a calculator that performs addition, subtraction, multiplication, or division using a switch statement.

let calc1=Number(prompt("Enter a number :"))
let calc2=Number(prompt("Enter a number :"))
let result=prompt("Enter a symbol")
switch(result){
    case "+":
        console.log(calc1+calc2)
        break;
         case "-":
        console.log(calc1-calc2)
        break;
         case "*":
        console.log(calc1*calc2)
        break;
         case "/":
        console.log(calc1/calc2)
        break;
        default:
            console.log("Enter wrong sign")
}




// Question-48: Ask the user for a month number and display the corresponding month name.
let month_num=Number(prompt("Enter any month number"))
switch(month_num){
    case 1:
        console.log("Its January")
        break;
        case 2:
        console.log("Its Feb")
        break;
        case 3:
        console.log("Its March")
        break;
        case 4:
        console.log("Its April")
        break;
        case 5:
        console.log("Its May")
        break;
        case 6:
        console.log("Its June")
        break;
        case 7:
        console.log("Its July")
        break;
        case 8:
        console.log("Its August")
        break;
        case 9:
        console.log("Its Sept")
        break;
        case 10:
        console.log("Its Oct")
        break;
        case 11:
        console.log("Its Nov")
        break;
        case 12:
        console.log("Its Dec")
        break;
        default:
            console.log("Wrong month number entered ")

}




 // Question-50 : Create a simple restaurant menu system using switch statements.
 let order=prompt("Enter your food items : ")
 switch(order){
    case "noodles":
        console.log("Will get in 2 min")
        break;
        case "pasta":
        console.log("Will take 20 mins")
        break;
        default:
            console.log("NOT IN THE MENU")
 }







