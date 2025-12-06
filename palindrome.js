let word = prompt("please enter any word you want to check");
let reversed = word.split("").reverse().join("");
console.log(reversed);
if(word===reversed){
    console.log("yes the number is palindrome " +word);
}
else{
 console.log("no, the number is not palindrome " +word)
}