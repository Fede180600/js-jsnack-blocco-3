// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const teams = [
    {
        nome: "Roma",
        puntiFatti: getRndInteger(1, 70),
        falliSubiti: getRndInteger(1, 15)
    },
    {
        nome: "Milan",
        puntiFatti: getRndInteger(1, 70),
        falliSubiti: getRndInteger(1, 15)
    },
    {
        nome: "Barcellona",
        puntiFatti: getRndInteger(1, 70),
        falliSubiti: getRndInteger(1, 15)
    },
    {
        nome: "Torino",
        puntiFatti: getRndInteger(1, 70),
        falliSubiti: getRndInteger(1, 15)
    },
    {
        nome: "Inter",
        puntiFatti: getRndInteger(1, 70),
        falliSubiti: getRndInteger(1, 15)
    },
];

console.log(teams);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }