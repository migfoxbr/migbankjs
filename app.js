const fs = require('fs')
const path = require("path")
const { Bank } = require("./class/bank");
const input = require("synchro-prompt");
const { Cliente } = require("./class/client");
const validacoes = require("./validacao/validacoes");
const  formatar  = require("./validacao/formatacao");

// Instanciando o Objeto
let banco = new Bank();
let cliente = new Cliente();

// utilizano biblioteca fs (File System do Nodejs)
function salvarCliente(cliente) {
    const pastaDestino = path.join(__dirname, "Dados-TXT");
        if (!fs.existsSync(pastaDestino)){
            fs.mkdirSync(pastaDestino);
        };

    let dadosCliente = 
    ` Nome: ${cliente.nome}\n
    CPF: ${cliente.cpf}\n
    Telefone: ${cliente.telefone}\n
    Email: ${cliente.email}\n
    Endereço: ${cliente.endereco}\n
    Número da Conta: ${cliente.numeroConta}\n
    Agência: ${cliente.agencia}\n
    ----------------------\n`;

    const nomeArquivo = path.join(pastaDestino,`Dados-Clientes-${cliente.numeroConta}.txt` );
    fs.appendFileSync(nomeArquivo, dadosCliente, "utf-8");
    console.log(`Dados salvos com sucesso no arquivo ${nomeArquivo}!`)
};

function inicio() {
    let menu = validacoes.validarOpcao1();

    if (menu === 1) {     
        let nome = formatar.formatarNome();
        let cpf = validacoes.validarCpf();
        let telefone = validacoes.validarTell();
        let endereco = input("Endereço : ");
        let email = validacoes.validarEmail1e2();
         
        // Criar cliente somente depois de coletar os dados
        let novoCliente = new Cliente(nome, cpf, telefone, email, endereco, this.agencia);
        banco.clients.push(novoCliente);

        salvarCliente(novoCliente);
    };

    switch (menu) {
        case 2:
            conta();
            break;
        case 3:
            excluirConta();
            break;
        default:
    }
}

function conta() {
    let menuConta = validacoes.validarOpcao2()
   
    switch(menuConta) {
        case 1:
            cliente.sacar();
            break;
        case 2 :
            cliente.depositar();
            break;
        case 3 :
            cliente.enviar();
            break;
        case 4 :
            cliente.receber();
            break;
        case 5 :
            cliente.mostrarSaldo();
            break;
    }                    
}
function excluirConta() {

}
inicio();
/*c.adicionarCliente("Miguel",827383874,9827890,"sadraksv@gmail.com","Av.pinheiro mach");
c.adicionarCliente("Robson",372890270,9538784,"mtgu73@gmail.com","Av.Ana costa");
c.adicionarCliente("Junim",474728858,9637846,"trist8@gmail.com","Av.Bernadin de campo");
c.adicionarCliente("Caua",128686476,2757389,"xartris@gamail.com","Av.Pedro carvalho");
c.mostrartodosclientes()*/
//console.log(c.geradorConta())
/*c.adicionarCliente("Miguel",827383874,9827890,"sadraksv@gmail.com","Av.pinheiro mach");
c.adicionarCliente("Robson",372890270,9538784,"mtgu73@gmail.com","Av.Ana costa");
c.adicionarCliente("Junim",474728858,9637846,"trist8@gmail.com","Av.Bernadin de campo");
c.adicionarCliente("Caua",128686476,2757389,"xartris@gamail.com","Av.Pedro carvalho");
c.mostrartodosclientes()*/
//console.log(c.geradorConta())