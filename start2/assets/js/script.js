var btn = document.getElementById('btn');

var budget = 800;

var array = [];

btn.addEventListener('click', function(){

    var generaNumeri = Math.floor(Math.random() * 100);

    document.getElementById('lista').innerHTML += `<li> €${generaNumeri} </li>`;

    array.push(generaNumeri);

    console.log(array);

    var totaleSpesa = array.reduce(funzione);

    function funzione (totale, valore) {
    return totale + valore;
    };

    var rimanente = (budget - totaleSpesa);

    document.getElementById('rimanente').innerHTML = `Budget rimanente: ${rimanente}`;

    document.getElementById('conteggio').innerHTML = `Conteggio spese eseguite: ${array.length}`;

    if (rimanente <= 200) {
        btn.disabled = true;
        document.getElementById('stop').innerHTML = 'A causa dei numerosi acquisti, hai superato il limite. <br> La possibiltà di acquistare nuovamente ti è negata! '
    }

});



//----------------------
