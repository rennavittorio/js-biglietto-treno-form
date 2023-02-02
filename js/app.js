// console.log('works!');
//dichiaro variabili necessarie
let fullNameElement, distanceRouteElement, ageClusterElement;
const priceAtKm = 0.21;
let ticketPrice;

//richiamare elementi per inserimento dati utente
let userNameOutput = document.getElementById('userNameOutput');
let ticketTypeOutput = document.getElementById('ticketTypeOutput');
let ticketPriceOutput = document.getElementById('ticketPriceOutput');

//richiamo elementi a comparsa-scomparsa
let yourTicketHeader = document.getElementById('your-ticket__header');
let yourTicketBody = document.getElementById('your-ticket__body');
// console.log(userNameOutput, ticketTypeOutput, ticketPriceOutput);
console.log(yourTicketHeader, yourTicketBody);


//richiamare bottone generator
const generateTicketElement = document.querySelector('.generateTicket');
const undoTicketElement = document.querySelector('.undoTicket');
// console.log(generateTicketElement);

//al click del bottone:
generateTicketElement.addEventListener('click', function(){
    // console.log('btn clicked');

    //richiamare elementi selezionati da utente
    fullNameElement = document.querySelector('.fullName').value;
    distanceRouteElement = document.querySelector('.distanceRoute').value;
    distanceRouteElement = parseFloat(distanceRouteElement);
    ageClusterElement = document.querySelector('.ageCluster').value;

    //calcolare prezzo biglietto base (km * 0.21)
    ticketPrice = distanceRouteElement * priceAtKm;
    console.log('prezzo base', ticketPrice);

    //applicare sconto in base a fascia d'età
        //SE user < 18, sconto 20%
        //SE user > 65, sconto 40%
        //ALTRIMENTI nessuno sconto
    if (ageClusterElement === 'under18') {
        ticketPrice = ticketPrice * .80;
        ticketTypeOutput.innerHTML = 'Biglietto Junior';

    } else if (ageClusterElement === 'over65'){
        ticketPrice = ticketPrice * .60;
        ticketTypeOutput.innerHTML = 'Biglietto Senior';

    } else if (ageClusterElement === 'adult') {
        ticketPrice = ticketPrice;
        ticketTypeOutput.innerHTML = 'Biglietto Standard';
    } 

    //inserire dati utente in elementi ticket
    userNameOutput.innerHTML = fullNameElement;

    //Mostrare dati inseriti e prezzo finale a utente
    ticketPrice = parseFloat(ticketPrice).toFixed(2);
    ticketPrice = parseFloat(ticketPrice);
    console.log('prezzo scontato', ticketPrice);

    ticketPriceOutput.innerHTML = ticketPrice + ' €';

    yourTicketHeader.classList.replace('d-none', 'd-block');
    yourTicketBody.classList.replace('d-none', 'd-block');
})

undoTicketElement.addEventListener('click', function () {
    fullNameElement = document.querySelector('.fullName');
    fullNameElement.value = '';

    distanceRouteElement = document.querySelector('.distanceRoute');
    distanceRouteElement.value = '';

    ageClusterElement = document.querySelector('.ageCluster');
    ageClusterElement.selectedIndex = 0; //da capire meglio

    //non serve più, perché scompare il biglietto
    // userNameOutput.innerHTML = '-';
    // ticketTypeOutput.innerHTML = '-';
    // ticketPriceOutput.innerHTML = '-';

    yourTicketHeader.classList.replace('d-block', 'd-none');
    yourTicketBody.classList.replace('d-block', 'd-none');

})

    













