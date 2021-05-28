// valore dado giocatore 1
var dado1 = Math.floor(Math.random() * 6 ) +1;
// inserimento valore dado in html
document.getElementById('dado1').innerHTML = dado1;

// valore dado giocatore 2
var dado2 = Math.floor(Math.random() * 6 ) +1;
// inserimento valore dado in html
document.getElementById('dado2').innerHTML = dado2;

// verifica vincitore
if (dado1 > dado2) {
    document.getElementById('vincitore').innerHTML = 'Giocatore 1 ha vinto!'
} else if (dado1 === dado2) {
    document.getElementById('vincitore').innerHTML = 'Pareggio!'
} else {
    document.getElementById('vincitore').innerHTML = 'Giocatore 2 ha vinto!'
}