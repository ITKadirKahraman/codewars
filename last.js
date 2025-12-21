// funktionen

let discount = 50;
let price = 500;

function calculatorPrice() {
    console.log((price - discount) * 1.19);
}

calculatorPrice();

// funktion mit parameter

function multiplizieren(a, b, c, d) {
    if((a < b) && (b > c)){
        let e = (a*b) + (c*d);
        console.log(e);
    }
}

multiplizieren(22, 33, 24.3, 88.5);

// funktion mit parametern und return

function subtrahieren(zahl, zahl2, zahl3, zahl4) {
    let value = (zahl * zahl2) - (zahl3 - zahl4);
    return value;
    return console.log(value);
}

function plus(zahl, zahl2, zahl3, zahl4) {
    let value = (zahl * zahl2) + (zahl3 * zahl4);
    return console.log(value);
}

console.log(subtrahieren(13, 33, 12, 10));
plus(13, 33, 12, 10);
