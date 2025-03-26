const cliente = require("./client");
class Bank{
    constructor(){
        this.clients = [];
        this.agencia = ["05", "06", "01", "09", "04"];
    }
    adicionarCliente(nome, cpf, telefone, email, endereco){
        let newCliente = new cliente.Cliente(nome, cpf, telefone, email, endereco,this.agencia);
        console.log("Cliente criado:", newCliente)
        this.clients.push(newCliente);
    }
     mostrartodosclientes(){
        this.clients.forEach(e => {
            e.mostrarDados();
        });
    }
    
    enviar(){

    }

    receber(){

    }
    
    sacar(){

    }

    depositar(){

    }
   
}

module.exports = { Bank };