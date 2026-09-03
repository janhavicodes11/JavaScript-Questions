function greet() {

    function inner() {
        console.log("Good morning");
    }

    return inner;
}

let result = greet();

result();
