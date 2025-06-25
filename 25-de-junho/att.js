/*MY CODE*/

class Usuario {
    exibirPerfil() { return "Exibido" }
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    getPermissoes() { "..." }
}

class Aluno extends Usuario {
    #senha = 1234;
    constructor(nome, email, matricula, senha) {
        super(nome, email)
        this.matricula = matricula;
        this.#senha = senha;
    }
    getPermissoes() { return ["ler conteudo", "fazer exercicios"] }
}

class Adimin extends Usuario {
    constructor(nome, email, nivelDeAcesso,) {
        super(nome, email)
        this.nivelDeAcesso = nivelDeAcesso;
    }
    getPermissoes() { return ["Gerenciar Usuarios", "Editar conteudo", "Ver relatorio"] }
}

const aluno = new Aluno("Pedroga", "pedroga@gmail.com", 222222222, 'jf')
const adimin = new Adimin("Claytin do Grau", "dograu@gmail.com", "Administrador")

console.log(aluno.getPermissoes())
console.log(adimin.getPermissoes())

/*Teacher Code*/

class Usuario {
    
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    getPermissoes() { 
        return []
    }

    exibirPerfil() { 
        return "Exibido" 

    }

    isAdmin() {
        return false;
    }
}

class Aluno extends Usuario {

    constructor(nome, email, matricula, senha) {
        super(nome, email)
        this.matricula = matricula;
        this.senha = senha;
    }
    getPermissoes() { return ["ler conteudo", "fazer exercicios"] }
}

class Aluno2 extends Usuario {

    constructor(nome, email, matricula, senha) {
        super(nome, email)
        this.matricula = matricula;
        this.senha = senha;
    }
}

class Admin extends Usuario {
    constructor(nome, email, nivelDeAcesso,) {
        super(nome, email)
        this.nivelDeAcesso = nivelDeAcesso;
    }
    getPermissoes() { return ["Gerenciar Usuarios", "Editar conteudo", "Ver relatorio"] }
    isAdmin() {
        return true;
    }
}

const usuarios = [
    new Aluno("Pedr[oga", "pedroga@gmail.com", 222222222, 'jf'),
    new Aluno2("Pedroga", "pedroga@gmail.com", 222222222, 'jf'),
    new Admin("Claytin do Grau", "dograu@gmail.com", "Administrador")
]

for (user of usuarios) {
    console.log(user.getPermissoes())
    console.log(`admin: ${user.isAdmin()}`)
}