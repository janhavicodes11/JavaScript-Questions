// Question-61 : Print a square pattern of stars of size 5×5.
for(let i=1;i<=5;i++){
   let pattern= ""
   for(let j=1;j<=5;j++){
     pattern=pattern+"*"
   }
   console.log(pattern)
}




// Question-62 : Print a rectangular star pattern of 4 rows and 6 columns.
/*for(let i=0;i<4;i++){
     let pattern=""
    for(let j=1;j<6;j++){
        pattern=pattern+"*"
    }
    console.log(pattern)
}*/




// Question-63 : Print a right-angled triangle star pattern.
/*for(let i=1;i<=5;i++){
    let pattern=""
    for(j=1;j<=i;j++){
        pattern=pattern+"*"
    }
    console.log(pattern)
}*/





// Question-64 : Print an inverted right-angled triangle pattern.
/*for(i=5;i>=1;i--){
    let pattern= ""
    for(j=1;j<=i;j++){
        pattern=pattern+"*"
    }
    console.log(pattern)
}*/




// Question-65 : Print a pyramid star pattern. 
const rows = 5;

// Outer loop handles the number of rows
for (let i = 1; i <= rows; i++) {
  let rowStr = "";

  // Inner loop 1: Adds leading spaces
  for (let j = 1; j <= rows - i; j++) {
    rowStr += " ";
  }

  // Inner loop 2: Adds stars (odd numbers: 1, 3, 5, 7, 9)
  for (let k = 1; k <= 2 * i - 1; k++) {
    rowStr += "*";
  }

  // Print the final row string
  console.log(rowStr);
}
