/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */
// user value stored in a const
const user_num = prompt("Inserisci un numero di 4 cifre")

// split method to split the string coming from the prompt
let split = user_num.split("");

// check split.length === 4
if(split.length !== 4) {
    console.log("Il numero inserito non rispetta le condizioni")
} else {
    // initialising sum to 0
    let sum = 0;
    
    // for statement with i from 0 to 3 (split length)
    for(let i=0; i < split.length; i++) {
        // tranform from string to number
        let split_number = parseInt(split[i]);
        // add the number to the sum for every iteration
        sum += split_number
    }    
    console.log(`La somma dei numeri inseriti è ${sum}`)
}
