const bank = require("./bank")
const fs = require("fs");

class Cliente{
  constructor(nome, cpf, telefone, email, endereco, agencias){
    this.agencias = agencias || ["05", "06", "01", "09", "04"];
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;

    this.agencia = this.escolherAgencia();
    this.numeroConta = this.geradorConta(); // GERAR NUMEROS NÃO PODE SE REPITIR 7 DIGITOS

    this.saldo = 10000;    

    //this.salvarCliente();
  } 
  escolherAgencia(){
    let numb = Math.floor(Math.random() * this.agencias.length);
    return this.agencias[numb];  // Retorna a agência escolhida
  }
  geradorConta(){
    let number = Math.floor(1000000 + Math.random() * 9000000);
    return number;
    //for(let i = 0; i < number.length; i++){}
  }
  mostrarDados(){
    console.log("-------------------------------------------")
    console.log(`Nome: ${this.nome}\nCPF: ${this.cpf}\nTell: ${this.telefone}\nEmail: ${this.email}\nEndereço: ${this.endereco}`);
    console.log(this.numeroConta,"\n",this.agencia);
  }

  /*salvarCliente() {
    const fileName = `Dados-Clientes-${this.numeroConta}.txt`; // Nome do arquivo baseado na conta

    const dados = `Nome: ${this.nome}
CPF: ${this.cpf}
Telefone: ${this.telefone}
Email: ${this.email}
Endereço: ${this.endereco}
Número da Conta: ${this.numeroConta}
Agência: ${this.agencia}
Saldo: ${this.saldo}\n`;

    fs.writeFileSync(fileName, dados, { flag: "w" }); // Salva ou sobrescreve o arquivo
    console.log(`Cliente salvo em ${fileName}`);
  }*/

  mostrarSaldo(){

  }
  adicionarSaldo(){

  }
  descontarSaldo(){

  }
 
}

module.exports = {Cliente};