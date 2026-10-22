var count=10

function modify(){
    count=count+10
    return count
}

console.log("Before", count)
let result=modify()
console.log("After", result)
