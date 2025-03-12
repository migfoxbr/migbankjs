const { Bank } = require("./class/bank");
const input = require("synchro-prompt");
const Cliente  = require("./class/client");

let cliente = new Cliente.Cliente();
let c = new Bank();

function inicio() {
    let Menu = input("Olá seja Bem vindo(a) ao MIGBANK!\n Digite 1 - Cadastro\n Digite 2 -  Entrar\n Digite 3 - Excluir Conta\n>> ");
    if (Menu === "1") {
        let nome = input("Nome : ");
        let cpf = input("CPF : ");
        let telefone = input("Telefone : ");
        let endereco = input("Endereço : ");
        let email;
        while (true) {
            email = input("Email :");
            if (validarEmail(email) && validaeEmail2(email)) {
                break;
            } else {
                console.log("Email inválido! Tente novamente.");
            }
            console.log("Cadastro Concluído com sucesso!");
        };
        c.adicionarCliente(nome,cpf,telefone,email,endereco);
      
    
    } //else {
        //console.log("Opção inválida")
   // }
        if(Menu == 2 ){
            let CpfDoCliente = input("Digite seu Cpf :");
                if (CpfDoCliente == Cliente.cpf){
                    Conta();
                }
        }
}

function Conta(nome, cpf, telefone, email, endereco,agencia){
    let mostrarDados = c.mostrartodosclientes(nome, cpf, telefone, email, endereco,agencia);
    console.log(mostrarDados);
    
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function validaeEmail2(email) {
    const es = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com", "@mail.com", "@uol.com.br "];
    return es.some(es => email.endsWith(es));
}
inicio();


/*c.adicionarCliente("Miguel",827383874,9827890,"sadraksv@gmail.com","Av.pinheiro mach");
c.adicionarCliente("Robson",372890270,9538784,"mtgu73@gmail.com","Av.Ana costa");
c.adicionarCliente("Junim",474728858,9637846,"trist8@gmail.com","Av.Bernadin de campo");
c.adicionarCliente("Caua",128686476,2757389,"xartris@gamail.com","Av.Pedro carvalho");
c.mostrartodosclientes()*/
//console.log(c.geradorConta())