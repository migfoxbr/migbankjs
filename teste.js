function gerarCodigoAleatorio() {
    return Math.floor(1000000 + Math.random() * 9000000);
}

console.log(gerarCodigoAleatorio());