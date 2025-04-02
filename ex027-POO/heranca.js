class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + 'ligado');
            return;
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + 'desligado');
            return;
        }
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,moedelo){
        super(nome);
        this.cor = cor
        this.modelo = moedelo
    }
}



const d1 = new DispositivoEletronico('smartphone')

d1.ligar()
d1.desligar()
console.log(d1)

const s1 = new Smartphone('iphone','preto','14 promax')

s1.ligar()
console.log(s1)