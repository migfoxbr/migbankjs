const bank = require("./bank")

class Cliente{
  constructor(nome, cpf, telefone, email, endereco, agencias){
    this.agencias = agencias || [];
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;

    this.agencia = this.escolherAgencia();
    this.numeroConta = this.geradorConta(); // GERAR NUMEROS NÃO PODE SE REPITIR 7 DIGITOS

    this.saldo = 0;    
  }
  mostrarSaldo(){

  }
  adicionarSaldo(){

  }
  descontarSaldo(){

  }
  escolherAgencia(){
    let numb = Math.floor(Math.random() * this.agencias.length);  // Corrigir para usar 'this.agencias'
    let ag = this.agencias[numb];
    return ag;
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
}

module.exports = {Cliente};