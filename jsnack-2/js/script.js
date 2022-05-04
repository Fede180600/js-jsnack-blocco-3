// JSNACK2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

// Creo array di numeri utente
const userNums = [];

let numsSum = 0;
// Condizione per chiedere numeri e pusharli nella array userNums finche la somma è < 50 
while (numsSum < 50) {
    if (numsSum < 50) {
        const userNum = parseInt(prompt("inserisci un numero"));
        console.log("Numero inserito dall'utente:", userNum);
        if (numsSum < 50) {
            // Ciclo per fare la somma dei numeri dell'array
            for (let i = 0; i < userNums.length; i++) {
                const num = userNums[i];
                numsSum += num;
                console.log("la somma è:", numsSum);
            };
            userNums.push(userNum)
        };
    };
} 