let num =[];
for(i=0;i<5;i++){
    num.push(Number(prompt(" Enter number" + (i+1))));
}
for(i=0; i< num.length; i++){
if(num[i]%2===0){
console.log(num[i] + " is Even");
}
else{
console.log(num[i] + " is odd");
    
}
}