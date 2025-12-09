function factorial(n){
    let result = 1;
    for(i=1;i<=n;i++){
          result  *= i
    }
    return result;
}
let num = prompt("please enter the number you want to factorial");
console.log(`${num} factorial is ${factorial(num)}`);

