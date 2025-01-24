//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let lista = '';

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo);
        listarAmigos();
    } else {
       alert('Por favor, preencha o campo com o nome do amigo.');
   }
    limparCampo();
}

function listarAmigos() {
    lista = '';
    amigos.forEach(nomeAmigo => {    
        lista += nomeAmigo + '<br>'});   
    document.getElementById('listaAmigos').innerHTML = lista;
}

function sortearAmigo(){
    if (amigos.length > 0) {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        alert('Você sorteou:'+ amigos[amigoSorteado]);
        amigos.splice(amigoSorteado, 1);
        listarAmigos();
    } else {
        alert('Não há amigos para sortear.');
    } 
}

function limparCampo() {
    nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = '';
}
