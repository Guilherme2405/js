//função construtora retorna objetos
//função fabrica fabrica objetos
//construtora === tem que iniciar com a letra maiuscula ex: Pessoa (new); isso gera novos objetos

function Pessoa(nome,sobrenome) {
    //nas funções construtoras posso usar ou nao ";" igual quando usa normalmente

    //atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo')
    };
};

const p1 = new Pessoa('guilherme', 'cataneo')
const p2 = new Pessoa('otavio', 'cataneo')
//nao pode deixar de usar a palavra new
p1.metodo();