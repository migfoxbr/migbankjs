const { Bank } = require("./class/bank");
const input = require("synchro-prompt");
const Cliente  = require("./class/client");
const validacoes = require("./validacao/validacoes");
const  formatar  = require("./validacao/formatacao");

// Instanciando o Objeto
let cliente = new Cliente.Cliente();
let c = new Bank();

function inicio() {
    let Menu = input("Olá seja Bem vindo(a) ao MIGBANK!\n Digite 1 - Cadastro\n Digite 2 -  Entrar\n Digite 3 - Excluir Conta\n>> ");
    if (Menu === "1") {     
        let nome = formatar.formatarNome();
        let cpf = validacoes.validarCpf();
        let telefone = validacoes.validarTell();
        let endereco = input("Endereço : ");

        let email;
        while (true) {
            email = input("Email :");
            if (validacoes.validarEmail(email) && validacoes.validarEmail2(email)) {
                break;
            } else {
                console.log("Email inválido! Tente novamente.");
            }
        };
        c.adicionarCliente(nome,cpf,telefone,email,endereco);
    }
}
inicio();
/*c.adicionarCliente("Miguel",827383874,9827890,"sadraksv@gmail.com","Av.pinheiro mach");
c.adicionarCliente("Robson",372890270,9538784,"mtgu73@gmail.com","Av.Ana costa");
c.adicionarCliente("Junim",474728858,9637846,"trist8@gmail.com","Av.Bernadin de campo");
c.adicionarCliente("Caua",128686476,2757389,"xartris@gamail.com","Av.Pedro carvalho");
c.mostrartodosclientes()*/
//console.log(c.geradorConta())