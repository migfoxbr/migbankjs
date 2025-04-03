const input = require("synchro-prompt")

function validarCpf(cpf) {
    while (true) {
        let cpf = input("Cpf: ").replace("/\D/g, ''"); // Remove qualquer caractere que não seja número

        if (cpf.length === 11) {
            return cpf;
        } else {
            console.log("Cpf inválido! Digite novamente...\n");
        };
    };
};

function validarTell(tell) {
    while (true) {
        let numero = input("Numero: ");

        if (numero.length === 11) {
            return numero;
        } else {
            console.log("Numero inválido. Digite novamente")
        };
    };
};

function validarEmail1(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
function validarEmail2(email) {
    const es = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com", "@mail.com", "@uol.com.br "];
    return es.some(es => email.endsWith(es));
};

function validarEmail1e2() {
    let email;

    while (true) {
        email = input("Email :");
        if (validarEmail1(email) && validarEmail2(email)) {
            break;
        } else {
            console.log("Email inválido! Tente novamente.");
        }
    };
}

function Conta(nome, cpf, telefone, email, endereco, agencia) {
    let mostrarDados = c.mostrartodosclientes(nome, cpf, telefone, email, endereco, agencia);
    console.log(mostrarDados);
};

function validarOpcao1() {
    let menu;

    while (true) {
        menu = Number(input("Olá seja Bem vindo(a) ao MIGBANK!\n Digite 1 - Cadastro\n Digite 2 -  Entrar\n Digite 3 - Excluir Conta\n>>"));

        if ([1, 2, 3].includes(menu)) {
            return menu;
        } else {
            console.log("Opção inválida. Digite novamente..\n------------------------------------");
        }
    }
}

function validarOpcao2() {
    let menuConta;

    while (true) {
        menuConta = Number(input("1 - Saque\n2 - Depositar\n3 - Enviar\n4 - Receber\n5 - SALDO\n"));

        if ([1, 2, 3, 4, 5].includes(menuConta)) {
            return menuConta; // Retorna a opção inválida
        } else {
            console.log("Opção inválida. Digite novamente..\n------------------------------------");
        }
    }
}

module.exports = { validarOpcao1, validarOpcao2, validarCpf, validarEmail1, validarEmail2, validarTell, validarEmail1e2 };