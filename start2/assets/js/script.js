var btn = document.getElementById('btn');

var budget = 800;

btn.addEventListener('click', function(){

    var generaNumeri = Math.floor(Math.random() * 100);

    document.getElementById('lista').innerHTML += `<li> €${generaNumeri} </li>`;

    var array = [generaNumeri];

    var totaleSpesa = array.reduce(funzione);

    function funzione (totale, valore) {
    return totale + valore;
    };

    var rimanente = (budget - totaleSpesa);

    document.getElementById('rimanente').innerHTML = `Budget rimanente: ${rimanente}`;

    if (rimanente <= 200) {
        //disabilita bottone
        //conteggio spese eseguite
        document.getElementById('stop').innerHTML = 'A causa dei numerosi acquisti, hai superato il limite di 200€'
    }

});

//----------------------
