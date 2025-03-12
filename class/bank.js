const cliente = require("./client");
class Bank{
    constructor(){
        this.clients = [];
        this.agencia = ["05", "06", "01", "09", "04"];
    }
    
    enviar(){

    }

    receber(){

    }
    
    sacar(){

    }

    depositar(){

    }
    mostrartodosclientes(){
        this.clients.forEach(e => {
        e.mostrarDados();
        });
    }
    adicionarCliente(nome, cpf, telefone, email, endereco){
        let newCliente = new cliente.Cliente(nome, cpf, telefone, email, endereco,this.agencia);
        console.log("Cliente criado:", newCliente)
        this.clients.push(newCliente);
        //newCliente.mostrarDados();
    }
}

module.exports = { Bank };