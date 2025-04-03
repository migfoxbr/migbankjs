const input = require("synchro-prompt");

let a = input("Digite o primeiro valor ");
let b = input("Digite o segundo valor");
let c = input("Digite o terceiro valor");

let vet = [a,b,c];

console.log(`1: ${vet[0]}\n2: ${vet[1]}\n3: ${vet[2]}`);