let word = prompt("please enter any word you want to check");
let reversed= "";
for(i = word.length-1; i>=0; i--){
    reversed = reversed + word[i];
}
console.log(reversed);
if(word===reversed){
    console.log("yes, the word is palindrome")
}
else{
    console.log("no the word is not palindrome")
}