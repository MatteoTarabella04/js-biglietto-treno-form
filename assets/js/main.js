//dichiaro le variabili per l'inserimento e inizializzo il prezzo al km
let nameInput;
let kmInput;
let age;
let tot;

const kmPrice = 0.21;

//seleziono il bottone del submit
const btnEl = document.querySelector('button.sub');

// dichiaro la variabile per la stampa del nome
const ticket_n = document.getElementById('ticket_name');

//dichiaro le variabili per il completamento del boglietto (descrizione)
const ticket_c = document.getElementById('ticket_coach');
const ticket_cd = document.getElementById('ticket_code');
const ticket_tot = document.getElementById('ticket_cost');
const ticket_age = document.getElementById('age_range')

// al click creo una funzione che mi legge cosa ha inserito l'utente 
btnEl.addEventListener('click', function(){
    console.log('clicked');
    
    // leggo i valori inseriti dall'utente
    const nameEl = document.getElementById("nameInput").value;
    const kmEl = document.getElementById("kmInput").value;
    console.log(nameEl, kmEl); 

    //inserisco i dati dell'utente nel biglietto
    ticket_n.innerHTML = nameEl;
    ticket_c.innerHTML = parseInt((Math.random() * 9 + 1));
    ticket_cd.innerHTML = parseInt((Math.random() * 100000 + 1));

    //calcolo il prezzo del biglietto
    switch (ticket_age.value) {

        case "minorenne":
            tot = (kmEl * kmPrice) * 20 / 100;
            console.log(tot.toFixed(2));
        break;

        case "maggiorenne":
            tot = (kmEl * kmPrice);
            console.log(tot.toFixed(2));
        break;

        case "over65":
            tot = (kmEl * kmPrice) * 40 / 100;
            console.log(tot.toFixed(2));
        break;
    }
    ticket_tot.innerHTML = tot.toFixed(2);
    
})

//seleziono il bottone del reset
const btnEl_clear = document.querySelector('button.clear');

// al click creo una funzione che mi resetta ciò che ha inserito l'utente 
btnEl_clear.addEventListener('click', function(){
    console.log('clicked');
    
    // resetto i valori inseriti dall'utente
    nameEl = document.getElementById("nameInput").value = '';
    kmEl = document.getElementById("kmInput").value = '';
})


