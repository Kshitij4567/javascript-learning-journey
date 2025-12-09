

function factorial(n) {
        let result =1;
        
        for(i=1;i<=n;i++){
            result *=i;
        }
        return result;
}
let num = prompt("enter the factorial you want");
console.log(factorial(num))