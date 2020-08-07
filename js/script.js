// chiedere all'utente nome
var nomeUtente = prompt("inserisci il tuo nome");
// chiedere all'utente il genere
var genereUtente = prompt("inserisci il tuo genere (maschio o femmina)");
// seleziono nome nell'html
var nome = document.getElementById('nome_utente');
// se maschio colore blu
if (genereUtente == "maschio") {
document.getElementById("nome_utente").innerHTML = nomeUtente;
nome.style.color = "blue";
} else if (genereUtente == "femmina"){
  document.getElementById("nome_utente").innerHTML = nomeUtente;
  nome.style.color = "pink";
} else {
  alert ("errore,inserisci dati correttamente!")
}
