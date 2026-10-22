let cache={}
function run(fact){
if(cache[fact]){
    return cache[fact]
}


let result=1;
for(let i=1;i<=fact;i++){
    result*=i
}
cache[fact]=result
return result
}
console.log(run(5))