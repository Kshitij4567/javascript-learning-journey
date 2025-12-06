let num = Number(prompt("please enter the number"));
let isprime = true;
for (let i = 2; i < num ; i++) {
    if(num%i===0){
        isprime = false;
        break;
    }  
}
if(isprime && num>1){
    console.log("The number you entered is prime")
}
else{
    console.log("the number you have entered is not prime")
}