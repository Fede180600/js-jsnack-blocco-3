// JSNACK2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

// Creo array di numeri utente
const userNums = [];

let numsSum = 0;
// Condizione per chiedere numeri e pusharli nella array userNums finche la somma è < 50 
while (numsSum < 50) {
    // Chiedo all'utente di inserire un numero
    const userNum = parseInt(prompt("inserisci un numero"));
    // Pusho il numero nellarray
    userNums.push(userNum);
    // Controllo il numero inserito
    console.log("Numero inserito dall'utente:", userNum);
    // Sommo i numeri inseriti 
    numsSum += userNum;
    // Risultato della somma 
    console.log("la somma è:", numsSum); 
    
} 