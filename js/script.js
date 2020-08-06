// chiedere all'utente nome
var nomeUtente = prompt("inserisci il tuo nome");
// chiedere all'utente il genere
var genereUtene = prompt("sei maschio o femmina?");
// seleziono nome nell'html
var nome = document.getElementById('nome_utente');
// se maschio colore blu
if (genere == "maschio"){
nome.className = nome.classList + "nomeBlu";
}
