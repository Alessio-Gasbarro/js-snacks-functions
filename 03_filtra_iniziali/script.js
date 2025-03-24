/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterInitials(arr, letter){
    let arrFiltered = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] === letter){
            arrFiltered.push(arr[i]);
        }
    }
    return arrFiltered
}

const filterInitials1 = (arr, lettera) => {
    let arrFiltered = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] === lettera){
            arrFiltered.push(arr[i]);
        }
    }
    return arrFiltered
}


// Invoca la funzione qui e stampa il risultato in console
console.log(filterInitials(names, 'A'));
console.log(filterInitials1(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]