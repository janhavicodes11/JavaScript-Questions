// Question 71 : Create a FizzBuzz program that prints: Fizz for multiples of 3 Buzz for multiples of 5
//FizzBuzz for multiples of both

let num = Number(prompt("Enter a number"))

if (num % 3 === 0 && num % 5 === 0) {
    console.log(num, "FizzBuzz Number")
} else if (num % 3 === 0) {
    console.log(num, "Fizz Number")
} else if (num % 5 === 0) {
    console.log(num, "Buzz Number")
} else {
    console.log("Not a fizzbuzz number")
}




// Question-72 : Create a number guessing game where the user has to guess a randomly generated number.
let randomNumber = Math.floor(Math.random() * 100) + 1;

let num = Number(prompt("Guess a number between 1 and 100:"));

while (num !== randomNumber) {
    if (num > randomNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Too low! Try again.");
    }

    num = Number(prompt("Guess again:"));
}

console.log("🎉 Congratulations! You guessed the correct number.");




// Question-73 : Simulate an ATM withdrawal system that checks balance before allowing withdrawals.
let balance=10000
let withdrawal=Number(prompt("Enter the amount : "))
if(withdrawal<=balance){
   console.log("Withdrawal successful!")
   console.log("The remaining balance is ", balance=balance-withdrawal)
}else{
    console.log("Insufficient balance!")
}




// Question-74 : Create an electricity bill calculator based on units consumed.
let units= Number(prompt(" Enter the units consumed : "))
let bill; 
if(units<=100){
    bill=units*5
    console.log("The  total amount is", bill)
}
else if(units<=200){
    bill=units*7
    console.log("The total amount is : ",bill)
}else if(units>200){
    bill=units*10
    console.log("The total amount is",bill)
}else{
    console.log("Enter Valid unit")
}





// Question-75 : Build a BMI calculator that categorizes users as Underweight, Normal, Overweight, or Obese.
let weight=Number(prompt("Enter the weight :"))
let height=Number(prompt("Enter the height : "))
let BMI= weight/(height*height)
if(BMI<18.5){
    console.log(BMI,"Underweight")
}
else if(BMI<=24.9){
console.log(BMI, "Normal")
} else if(BMI<=29.9){
    console.log(BMI, "Overweigth")
}else{
    console.log("Obese")
}




// Question-76 : Create a simple income tax calculator based on income slabs.
let income=Number(prompt("Enter the amount you earn : "))
let tax;
let reincome;
if(income<=250000){
    tax=income*0/100
    reincome=income-tax
    console.log("Amount of tax to be paid : ", tax)
    console.log("Remaining income : ", reincome)
}
else if(income>=250001 && income<=500000){
      tax=income*5/100
    reincome=income-tax
    console.log("Amount of tax to be paid : ", tax)
    console.log("Remaining income : ", reincome)
}
else if(income>=500001 && income<=1000000){
    tax=income*20/100
    reincome=income-tax
    console.log("Amount of tax to be paid : ", tax)
    console.log("Remaining income : ", reincome)
}
else{
    tax=income*30/100
    reincome=income-tax
    console.log("Amount of tax to be paid : ", tax)
    console.log("Remaining income : ", reincome)
}




// Question-77 : Create a login system that checks whether the entered username and password are correct.
let username = prompt("Enter the username : ");
let password = Number(prompt("Enter the password : "));
if (username === "Janhavi" && password === 1234) {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}





// Question-78 : Write a password strength checker that validates password length and complexity.
let password = prompt("Enter your password:");

let hasUpper = false;
let hasLower = false;
let hasNumber = false;
let hasSpecial = false;

if (password.length >= 8) {

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];
        let ascii = ch.charCodeAt(0);

        if (ascii >= 65 && ascii <= 90) {
            hasUpper = true;
        } else if (ascii >= 97 && ascii <= 122) {
            hasLower = true;
        } else if (ascii >= 48 && ascii <= 57) {
            hasNumber = true;
        } else {
            hasSpecial = true;
        }
    }

    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        console.log("✅ Strong Password");
    } else {
        console.log("❌ Weak Password");
    }

} else {
    console.log("❌ Password must be at least 8 characters long.");
}




// Question- 79 : Find the Greatest Common Divisor (GCD) of two numbers.
