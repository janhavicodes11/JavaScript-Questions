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
