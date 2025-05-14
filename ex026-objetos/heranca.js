// camisa, caneca, lapis
// aumento 
// desconto
function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(aumento) {this. preco += aumento}; // prototype de Produto ter uma função dentro de __proto__
Produto.prototype.desconto = function(desconto) {this. preco -= desconto};



function Camisa(nome,preco,cor){ // função para criar uma camisa dentro da função Produto
    Produto.call(this, nome, preco); // realiza o chamado para ser criado pela função construtora
    this.cor = cor // cria um elemento mesmo que fora da função Produto
};


Camisa.prototype = Object.create(Produto.prototype); // cria um prototype para função camisa, nesse caso "linkou" no prototype de produto
Camisa.prototype.constructor = Camisa; //essa prototype e da função construtora

Camisa.prototype.aumento = function(porcento) {
    this.preco = this.preco + (this.preco * (porcento / 100)) // aumenta o valor da camisa em porcentagem
}

function Caneca(nome,preco,imagem,estoque){ // cria caneca na função construtora produto
    Produto.call(this,nome,preco)  // realiza o chamado para ser criado pela função construtora
    this.imagem = imagem; // cria um elemento mesmo que fora da função Produto
    this.estoque = estoque;

Object.defineProperty(Caneca, 'estoque', {
        get: function() { 
            return estoque
        },
        set: function(valor) {
            valor = 50
           return estoque = valor
        }
        
    })
}

    

Caneca.prototype =Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca  


const camisa = new Camisa('regata', 75, 'roxo');
const caneca = new Caneca('porcelana', 35, 'TWD', 5);
camisa.aumento(10)
caneca.desconto(15)
console.log(camisa)
console.log(caneca)