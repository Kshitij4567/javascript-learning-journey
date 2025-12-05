 let balance= 15000;
 let pin= 1234;
 let enteredpin = Number(prompt("please enter your pin"));
 if(enteredpin===pin){
      let amount = Number(prompt("please enter the amount"))
      if(amount<=balance){
        balance= balance- amount;
        console.log("withdrawl successfull")
        console.log("your remaining amount is " +balance);
      }
      else{
        console.log("insufficient balance")
      }

 }
 else{
  console.log("incorrect pin entered")
 }
