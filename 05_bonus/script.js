/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greet(name) {
    const date = new Date();
    let hour = date.getHours();
    if(hour < 13){
        console.log(`Buongiorno ${name}.`);
    } else if(hour < 18){
        console.log(`Buon pomeriggio ${name}.`);
    } else {
        console.log(`Buonasera ${name}.`);
    }
}

const greet1 = (name) => {
    const date = new Date();
    let hour = date.getHours();
    if(hour < 13){
        console.log(`Buongiorno ${name}.`);
    } else if(hour < 18){
        console.log(`Buon pomeriggio ${name}.`);
    } else {
        console.log(`Buonasera ${name}.`);
    }
}

// Invoca la funzione qui e stampa il risultato in console
greet(name);
greet1(name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.