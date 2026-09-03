function hello(){
    console.log("Heyy")
}
function thrice(fn){
    fn()
    fn()
    fn()
}
thrice(hello)