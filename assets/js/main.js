//dichiaro le variabili per l'inserimento e inizializzo il prezzo al km
let nameInput;
let kmInput;
let age;
let tot;

const kmPrice = 0.21;

//seleziono il bottone del submit
const btnEl = document.querySelector('button.sub');

// dichiaro la variabile per la stampa del nome
const ticketNameElement = document.getElementById('ticket_name');

//dichiaro le variabili per il completamento del boglietto (descrizione)
const ticketTypeElement = document.getElementById('ticket_age');
const ticketCoachElement = document.getElementById('ticket_coach');
const ticketCodeElement = document.getElementById('ticket_code');
const ticketFinalPriceElement = document.getElementById('ticket_cost');
const ticketAgeElement = document.getElementById('age_range');
const ticket = document.getElementById('hide');

// al click creo una funzione che mi legge cosa ha inserito l'utente 
btnEl.addEventListener('click', function(){
    console.log('clicked');
    
    // leggo i valori inseriti dall'utente
    const nameEl = document.getElementById("nameInput").value;
    const kmEl = document.getElementById("kmInput").value;
    console.log(nameEl, kmEl); 

    //inserisco i dati dell'utente nel biglietto
    ticketNameElement.innerHTML = nameEl;
    ticketCoachElement.innerHTML = parseInt((Math.random() * 9 + 1));
    ticketCodeElement.innerHTML = parseInt((Math.random() * 100000 + 1));

    //calcolo il prezzo del biglietto
    switch (ticketAgeElement.value) {

        case "minorenne":
            tot = (kmEl * kmPrice) * 20 / 100;
            console.log(tot.toFixed(2));
            ticketTypeElement.innerHTML = 'Biglietto Ridotto'
        break;

        case "maggiorenne":
            tot = (kmEl * kmPrice);
            console.log(tot.toFixed(2));
            ticketTypeElement.innerHTML = 'Biglietto Standard'
        break;

        case "over65":
            tot = (kmEl * kmPrice) * 40 / 100;
            console.log(tot.toFixed(2));
            ticketTypeElement.innerHTML = 'Biglietto Ridotto Over 65'
        break;
    }
    ticketFinalPriceElement.innerHTML = `${tot.toFixed(2)} €`;

    //faccio apparire il biglietto
    ticket.className = "d-block";
    
})

//seleziono il bottone del reset
const btnEl_clear = document.querySelector('button.clear');

// al click creo una funzione che mi resetta ciò che ha inserito l'utente 
btnEl_clear.addEventListener('click', function(){
    console.log('clicked');
    
    // resetto i valori inseriti dall'utente
    nameEl = document.getElementById("nameInput").value = '';
    kmEl = document.getElementById("kmInput").value = '';

    //faccio sparire il biglietto dopo aver cliccato annulla
    ticket.className = "d-none";
})


