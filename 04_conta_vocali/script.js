/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelCount(str){
    const strVowels = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            strVowels.push(str[i]);
        }
    }
    return strVowels;
}

const vowelCount1 = (str) => {
    const strVowels = []
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            strVowels.push(str[i]);
        }
    }
    return strVowels;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelCount(word).length + ' (' + vowelCount(word) + ')');
console.log(vowelCount1(word).length + ' (' + vowelCount1(word) + ')');



//Risultato atteso se si passa 'javascript': 3 (a, a, i)