class Jogo{
    constructor(titulo,preco) {
        this.titulo = titulo;
        this.preco = preco;
    }
    possui() { return "Sou um Jogador"; }
}

class JogoOnline extends Jogo {
    #servidor;

    constructor(titulo,preco,servidor){
        super(titulo,preco)
        this.servidor = servidor
    }

    consultarServidor(){
        return super.possui() + " | " + "Sou um jogo online";
    }
}

let jogo =  new Jogo("Fofo",2000)
let jogoOnline = new JogoOnline("Fofo", 2000, "123123123")

console.log(jogoOnline.consultarServidor())