const input = require("synchro-prompt");

function formatarNome(){
    let nome = input("Nome: ");

    if (!nome) return "";

    let letras = nome.split("");
    letras[0] = letras[0].toUpperCase();

    return letras.join("");
};

module.exports = {formatarNome};