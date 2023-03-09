//dichiaro le variabili per l'inserimento e inizializzo il prezzo al km
let nameInput;
let kmInput;
let age;

const kmPrice = 0.21;

//seleziono il bottone del submit
const btnEl = document.querySelector('button.sub');

// al click creo una funzione che mi legge cosa ha inserito l'utente 
btnEl.addEventListener('click', function(){
    console.log('clicked');
    
    // leggo i valori inseriti dall'utente
    const nameEl = document.getElementById("nameInput").value;
    const kmEl = document.getElementById("kmInput").value;
    console.log(nameEl, kmEl); 
})

//seleziono il bottone del reset
const btnEl_clear = document.querySelector('button.clear');

// al click creo una funzione che mi resetta ciò che ha inserito l'utente 
btnEl_clear.addEventListener('click', function(){
    console.log('clicked');
    
    // resetto i valori inseriti dall'utente
    const nameEl = document.getElementById("nameInput").value = '';
    const kmEl = document.getElementById("kmInput").value = '';
})
