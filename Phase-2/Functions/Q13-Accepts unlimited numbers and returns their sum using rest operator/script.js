function rest(...a){
let sum=0
for(let i=0;i<a.length;i++){
    sum+=a[i]
}
return sum

}
console.log(rest(10,20,30))