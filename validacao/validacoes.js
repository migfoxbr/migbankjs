const input = require("synchro-prompt")

function validarCpf(cpf) {
    while (true){
       let cpf = input("Cpf: ").replace("/\D/g, ''"); // Remove qualquer caractere que não seja número

       if (cpf.length === 11){
        return cpf;
       } else {
        console.log("Cpf inválido! Digite novamente...\n");
       };
    }
    
};

function validarTell(){
    let numero = input("Numero: ");

    if(numero.length === 11){
        return numero;
    } else {
        console.log("Numero inválido Digite novamente!")
    }
};

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
function validarEmail2(email) {
    const es = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com", "@mail.com", "@uol.com.br "];
    return es.some(es => email.endsWith(es));
};
function Conta(nome, cpf, telefone, email, endereco,agencia){
    let mostrarDados = c.mostrartodosclientes(nome, cpf, telefone, email, endereco,agencia);
    console.log(mostrarDados); 
};
module.exports = {validarEmail2, validarCpf, validarEmail, validarTell};