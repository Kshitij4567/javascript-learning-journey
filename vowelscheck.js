let word = prompt("Enter any word you want to count vowels and consonants");
let vowels = ["a","e","i","o","u"];
let countVowels = 0;
let countConsonants = 0;
for(i=0;i<word.length;i++){
    let char = word[i].toLowerCase();
    if(vowels.includes(char)){
          countVowels++;
    } else if (char >= 'a' && char <= 'z') {
          countConsonants++;
    }
}
console.log("Total vowels in your word: " + countVowels);
console.log("Total consonants in your word: " + countConsonants);