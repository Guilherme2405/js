//defineProperty serve para alterar apenas uma propriedade de um elemento
//defineProperties serve para alterar varios uma propriedade de um elemento

function Produto(nome,preco,estoque) {
    this.nome = nome
    this.preco = preco
   // this.estoque = estoque
    let estoquePrivado = estoque
     Object.defineProperty(this,  'estoque', { //Object.defineProperty == definiu uma propriedade
        enumerable: true, //mostra a chave
        configurable: true, // configura a chave

        get:  function() {return estoquePrivado}, // mostrar o valor no console
        set: valor => {
            if(typeof valor !== 'number') {
                console.log('bad call') // caso for diferente retorna a execução dentro do if e protege o valor do estoque
                throw new TypeError('passe o valor do estoque como numero')
                
            }
            estoquePrivado = valor}
    }) // configurable permite redefinir a propriedade


};

const produto1 = new Produto('sub-placa', 35, 7);

produto1.estoque = 20 // troca o valor do estoque
// console.log(produto1.estoque) //exibe produto do estoque

function Criaproduto(nome){
    return {
    get nome() { // obtem o valor
    return nome
         },
    set nome(valor) { //"setta" o valor
        valor = valor.replace('coisa', '')
        nome = valor
 },

}
};
 const p2 = Criaproduto('camisa');
p2.nome = 'qualquer coisa'
 console.log(p2.nome)

