// console.log('works!');
//settare variabili necessarie
let fullNameElement, distanceRouteElement, ageClusterElement;
const priceAtKm = 0.21;
let ticketPrice;


//richiamare bottone generator
const generateTicketElement = document.querySelector('.generateTicket');
// console.log(generateTicketElement);

//al click del bottone:
generateTicketElement.addEventListener('click', function(){
    // console.log('btn clicked');

    //richiamare elementi selezionati da utente
    fullNameElement = document.querySelector('.fullName').value;
    distanceRouteElement = document.querySelector('.distanceRoute').value;
    distanceRouteElement = parseFloat(distanceRouteElement);
    ageClusterElement = document.querySelector('.ageCluster').value;
    console.log('dati utente sono', fullNameElement, distanceRouteElement, ageClusterElement);

    //calcolare prezzo biglietto base (km * 0.21)
    ticketPrice = distanceRouteElement * priceAtKm;
    console.log('prezzo base', ticketPrice);

    //applicare sconto in base a fascia d'età
        //SE user < 18, sconto 20%
        //SE user > 65, sconto 40%
        //ALTRIMENTI nessuno sconto
    if (ageClusterElement === 'under18') {
        ticketPrice = ticketPrice * .80;

    } else if (ageClusterElement === 'over65'){
        ticketPrice = ticketPrice * .60;

    } else {
        ticketPrice = ticketPrice;
    }

    //Mostrare dati inseriti e prezzo finale a utente
    ticketPrice = parseFloat(ticketPrice).toFixed(2);
    ticketPrice = parseFloat(ticketPrice);
    console.log('prezzo scontato', ticketPrice);
})


    













