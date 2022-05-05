// JSNACK1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanto l’altro.

// Creo le due array 
// const firstArray = [23, 97, 45, 13, 56, 74, 15, 134, 8];
// const secondArray = [12, 3, 53, 27];


// // While per confrontare le due array
// do {
//     const newNum = Math.floor(Math.random() * 200) + 1;
//     if (firstArray.length > secondArray.length) {
//         secondArray.push(newNum);
//     } else if (secondArray.length > firstArray.length) {
//         firstArray.push(newNum);
//     }
// } while (firstArray.length >  secondArray.length || secondArray.length > firstArray.length);

// console.log(firstArray);
// console.log(secondArray);

// CORREZIONE
// Creo le due array 
const firstArray = [23, 97, 45, 13, 56, 74, 15, 134, 8];
const secondArray = [12, 3, 53, 27];

let shortArray; 

if (firstArray.length > secondArray.length) {
    shortArray = secondArray;
} else {
    shortArray = firstArray;
}

while(firstArray.length !== secondArray.length) {
    const rndNumber = getRndInteger(1, 100);
    shortArray.push(rndNumber);
}

console.log(firstArray, secondArray);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
