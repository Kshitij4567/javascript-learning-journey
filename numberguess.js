let secret = Math.floor(Math.random() * 10) + 1;
let chances = 3;
while(chances>0){
    let num = Number(prompt("Enter the number you guessed"));
    if(num===secret){
        console.log("congractulations🎉 you won the game");
    }
    else{
        console.log("sorry, wrong guess try again");
        chances--;
    }
}