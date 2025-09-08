// Dichiarazione degli input
const mioForm = document.getElementById ("answers-form");
const mioUl = document.getElementById ("numbers-list");
const countDown = document.getElementById("countdown");
const mioP = document.querySelector ("p");
const mioInput = document.querySelectorAll(".form-control")
const messaggio = document.getElementById ("message")


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
    mioUl.appendChild(mioLi);
});

// Inizio le variabili per il conteggio del timer
let count = 30;
countDown.innerText = count;

// Inizio countdown con setInterval 
const timer = setInterval (() => {
    count--;
    countDown.textContent = count;
    // Fermo il counter quando arriva a zero con clearInterval
    if (count <= 0) {
        clearInterval(timer);
        mioUl.classList.add("d-none");
        mioP.style.display = "none";
        countDown.textContent = "Tempo Scaduto! Seleziona i numeri che ricordi!";
        mioForm.classList.remove("d-none");
    }
}, 1000);

// Raccolgo i dati dell'utente tramite un addEventListener
mioForm.addEventListener ("submit", (event) =>{
    event.preventDefault();
    // Array che raccoglie i valori tramite un ciclo for
    let output = [];
    for (let i = 0; i < mioInput.length; i++){
        output.push(Number(mioInput[i].value));
    }
    console.log("Numeri inseriti",output);
    let indovinati = [];
    // Confronto i numeri messi dall'utente con quelli generati dal pc 
    output.forEach(num =>{
    if (numeriSchermo.includes(num)){
        indovinati.push(num)
        }
    })
    console.log("Numeri indovinati", indovinati);

    messaggio.textContent = `Hai indovinato ${indovinati.length} numeri: ${indovinati.join(", ")}`;
});
