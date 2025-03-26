const fs = require('fs')
const path = require("path")
;const { Bank } = require("./class/bank");
const input = require("synchro-prompt");
const Cliente  = require("./class/client");
const validacoes = require("./validacao/validacoes");
const  formatar  = require("./validacao/formatacao");

// Instanciando o Objeto
let banco = new Bank();

function salvarCliente(cliente) {

    const pastaDestino = path.join(__dirname, "Dados-TXT");
    if (!fs.existsSync(pastaDestino)){
        fs.mkdirSync(pastaDestino);
    }

    let dadosCliente = 
    `Nome: ${cliente.nome}\n
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
}

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

        // Criar cliente somente depois de coletar os dados
        let novoCliente = new Cliente.Cliente(nome, cpf, telefone, email, endereco, this.agencia);
        banco.clients.push(novoCliente);

        salvarCliente(novoCliente);
    };
};
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