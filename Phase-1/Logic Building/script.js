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
