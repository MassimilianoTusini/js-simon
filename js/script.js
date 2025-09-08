// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.,
// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.,

// Consigli del giorno:

// Pensate prima in italiano.,
// Dividete in piccoli problemi la consegna.,
// Individuate gli elementi di cui avete bisogno per realizzare il programma.,
// Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array",


// Dichiarazione degli input
const myForm = document.getElementById ("answer-form");
const mioUl = document.getElementById ("numbers-list");
const countDown = document.getElementById("countdown")


// Funzione per generare numeri casuali
function casualNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
// Console log per vedere se la funzione è corretta
console.log(casualNum(10, 50))

// Funzione che genera un array di tot numeri in un range
function arrayNum(minNum, maxNum, numElements){
    // Variabile di array vuoto
    let numeri = []
    // Ciclo l'Array finchè è più corto di numElements (aggiungo elementi all'array finchè non ha raggiunto il numero di elementi che voglio mettere al suo interno)
    while (numeri.length < numElements){
        // Dichiaro una variabile che richiama la funzione usata per generare un numero casuale
        const num = casualNum(minNum, maxNum);
        // Se il numero NON è presente nel ciclo allora lo aggiungiamo all'array (verifica per evitare i doppi numeri)
        if (!numeri.includes(num)){
            numeri.push(num);
        }
    }
    return numeri
};
// Dichiaro una costante con i valori da mandare a schermo tramite l'uso delle variabili (un numero da 1 a 50 ripetuto 5 volte)
const numeriSchermo = arrayNum(1, 50, 5)
// Mando a schermo i numeri generati casualmente dalla prima funzione e aggiunti nell'array dalla seconda funzione
numeriSchermo.forEach(numero=> {
    const mioLi = document.createElement("li");
    mioLi.textContent = numero;
    mioUl.appendChild(mioLi)
})

