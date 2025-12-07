let veg = ["potato", "tomato", "brinjal", "cabbage", "onion"];
let search = prompt("Enter the name of a vegetable");
let found = false;

for (let i = 0; i < veg.length; i++) {
    if (veg[i].toLowerCase() === search.toLowerCase()) {
        found = true; // Corrected the typo from 'fount' to 'found'
        break; // Exit loop once a match is found
    }
}

if (found) {
    console.log(search + " is present in the vegetable list.");
} else {
    console.log(search + " is not present in the vegetable list.");
}