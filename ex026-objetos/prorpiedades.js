//defineProperty serve para alterar apenas uma propriedade de um elemento
//defineProperties serve para alterar varios uma propriedade de um elemento

function Produto(nome,preco,estoque) {
    this.nome = nome
    this.preco = preco
 // this.estoque = estoque

    Object.defineProperty(this,  'estoque', { //Object.defineProperty == definiu uma propriedade
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, // writable == define se o produto pode ser alterado ou nao
        configurable: true // configura a chave
    })

    // Object.defineProperty(this,  'estoque', { //Object.defineProperty == definiu uma propriedade
    //     enumerable: true, //mostra a chave
    //     value: estoque, //valor
    //     writable: false, // writable == define se o produto pode ser alterado ou nao
    //     configurable: true // configura a chave
    // }) configurable permite redefinir a propriedade

    Object.defineProperties(this, { //Object.defineProperty == definiu uma propriedade
        nome: {
            enumerable: true, //mostra a chave
            value: estoque, //valor
            writable: false, // writable == define se o produto pode ser alterado ou nao
            configurable: true // configura a chave
        },
        preco: {
            enumerable: true, //mostra a chave
            value: estoque, //valor
            writable: false, // writable == define se o produto pode ser alterado ou nao
            configurable: true // configura a chave
        }
    }) //  Object.defineProperties == permite definir mais propriedades na chave
};

const produto1 = new Produto('sub-placa', 35, 7);

// p1.estoque = 500; // so vai mudar dependendo do writable 
// console.log(p1)

console.log(Object.keys(produto1))

for (let chave in produto1) {
    console.log(chave)
}