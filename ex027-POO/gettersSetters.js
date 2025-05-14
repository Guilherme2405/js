const symbolVelocidade = Symbol('velocidade'); 
// um symbol nunca sera igual outro symbol
//nao e possivel usar a chave fora do objeto sem alguma alternativa

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[symbolVelocidade] = 0;
    };

    set velocidade(valor){
    if(typeof valor !== 'number') return;// se nao for do tipo numero retorna valor default do [symbolVelocidade]
    if(valor>= 100 || valor <=0) return; // se velocidade for maior q 100 retorna valor default do [symbolVelocidade]
    this[symbolVelocidade] = valor
    }

    get velocidade(){
        return this[symbolVelocidade]; 
    };



    acelerar() {
        if(this[symbolVelocidade] >= 100)return;
        this[symbolVelocidade]+=10;
    }

    freiar() {
        if(this[symbolVelocidade] <= 0)return;
        this[symbolVelocidade] -= 7;
    }
}

const carro1 = new Carro('mustang');

/* faz com que o veiculo acelere e freie entre um laço

for(let i = 0; i <=7; i++) {
    carro1.acelerar(); //acelera veiculo
}

for(let i = 0; i <=10; i++) {
    carro1.freiar(); // freia veiculo
}
*/


carro1.velocidade = 75; //nao e possivel utilizar sem alguma alternativa se estiver usando symbol
//console.log(carro1)
console.log(carro1.velocidade)

class Pessoa {
    constructor (nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomecompleto() {
        return this.nome +' ' + this.sobrenome;
    }

    set nomecompleto(valor){
        console.log('setter')
        valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

const pessoa1= new Pessoa('guiga','kirin')

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
