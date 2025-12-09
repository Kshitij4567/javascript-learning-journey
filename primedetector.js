function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let num = Number(prompt("Enter a number:"));
if (isPrime(num)) {
    console.log(num + " is Prime ✅");
} else {
    console.log(num + " is Not Prime ❌");
}

