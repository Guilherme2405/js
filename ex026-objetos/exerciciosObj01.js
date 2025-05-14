/*
Você deve criar um objeto chamado produto que irá representar um produto em uma loja.

*/

function CadastroDeProduto(nome,preco,descricao,qntdEmestoque) {
    this.nome = nome;
    this.preco = preco;
    this.qntdEmestoque = qntdEmestoque;
    this.descricao = descricao;
}

CadastroDeProduto.prototype.aumentaPreco = function(aumento){this.preco = this.preco + (this.preco * (aumento / 100))};
CadastroDeProduto.prototype.descontaPreco = function(desconto){this.preco = this.preco - (this.preco * (desconto / 100))};

CadastroDeProduto.prototype.compra = function(qntdItem){
    this.qntdEmestoque = this.qntdEmestoque - qntdItem;
    if (this.qntdEmestoque < 0) {
        this.qntdEmestoque = 0;
         console.log('estoque indisponivel, estoque atual', this.qntdEmestoque)
    }
    else if (this.qntdEmestoque >= 0) {
         console.log('compra realizada com sucesso', this.qntdEmestoque);
    }
};


const lapis = new CadastroDeProduto('lapis 4B', 7.8, 'usado para esboço e sombras leves',10);

const bicoDePena = new CadastroDeProduto('bico de pena',32.5,'usado para finalizar arte em tinta nakim',3)

Object.setPrototypeOf(lapis,CadastroDeProduto.prototype)
Object.setPrototypeOf(bicoDePena,CadastroDeProduto.prototype)

lapis.aumentaPreco(10)
bicoDePena.descontaPreco(10)


console.log(lapis)
console.log(bicoDePena)
console.log(bicoDePena.compra(2))
console.log(bicoDePena.compra(4))

