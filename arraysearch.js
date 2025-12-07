// Array Search Program
let fruits = ["apple", "banana", "mango", "orange", "grapes"];
let search = prompt("Konsa fruit search karna hai?");

let found = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase() === search.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    console.log(search + " array me hai!");
} else {
    console.log(search + " array me nahi hai.");
}