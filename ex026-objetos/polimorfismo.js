//Superclass

function Conta(agencia,conta,saldo) { //metodo pai
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo){
        console.log('saldo insuficiente: ', this.saldo.toFixed(2))
        return;
    } ;
    this.saldo-=valor;
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta}`)
    console.log(`saldo: ${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta (758,'guiga',285.9)

/*
conta1.sacar(100)
conta1.depositar(100)
conta1.depositar(50)
conta1.sacar(500)
 */

function ContaCorrente(agencia,conta,saldo,limite) { //metodo filho 1
    Conta.call(this,agencia,conta,saldo,limite); //herança -> esta herdando da funçao Conta
    this.limite= limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente


ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)){
        console.log('saldo insuficiente: ', this.saldo.toFixed(2))
        return;
    };

    this.saldo-=valor;
    this.verSaldo();
}

const cCorrente = new Conta (758,'guiga',285.9)


const cc = new ContaCorrente(15,'guiga', 0, 200)
cc.sacar(100)
console.log()

function Contapoupanca(agencia,conta,saldo) { // metodo filho 2
    Conta.call(this,agencia,conta,saldo); //herança  -> esta herdando da funçao Conta
}
Contapoupanca.prototype = Object.create(Conta.prototype)
Contapoupanca.prototype.constructor = Contapoupanca

const cPouopanca = new Conta (758,'guiga',285.9)

cPouopanca.depositar(50)
cPouopanca.sacar(500)