/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initials(arr){
    let arrinitials = [];
    for(let i = 0; i < arr.length; i++){
        arrinitials.push(arr[i][0]);
    }
    return arrinitials
}

const initials1 = (arr) => {
    let arrinitials = [];
    for(let i = 0; i < arr.length; i++){
        arrinitials.push(arr[i][0]);
    }
    return arrinitials
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initials(names));
console.log(initials1(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]