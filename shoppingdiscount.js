let amount = Number(prompt("please enter the amount"));

if(amount<500){
console.log("sorry this amount is insufficient for discount")
}
 else if( amount<1000 &&amount>=500){
    amount = amount-(amount*0.1);
    console.log(amount)
}
else if(amount>=1000 && amount<=2000){
    amount = amount - (amount*0.2);
    console.log(amount);
}
else{
    console.log("incorrect amount entered");
}