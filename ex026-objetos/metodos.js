/*
Object.value // mostra os valores
Object.entries // le os arrays em arrays == e possivel iterar sobre eles
Object.assign(des,any) // adiciona elementos
Object.getownPropertyDescriptor(o, 'prop') // retorna as propriedades do objeto
... (spread) // espalha o array
*/

// const produto = {nome: 'produto', preco: 20};

/*const outracoisa = {
    ...produto,
        material: 'vidro'
};
*/

// Object.freeze(produto) // nao deixa o objeto sofrer alteração
//  const caneca = Object.assign({}, produto, { material: 'porcelana' }) // adiciona elementos



// produto.nome = 'guiga';
// outracoisa.nome = 'guiga'; // ambas variaveis apontam pra mesma coisa
// outracoisa.preco = 45
// console.log(outracoisa)

// caneca.nome = 'caneca';
// caneca.preco = 35;



// console.log(caneca)
const produto = {nome: 'produto', preco: 20};



Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'mudei o nome' // consigo mudar o nome por aqui

})
console.log(Object.getOwnPropertyDescriptor(produto,'nome')) // mostra as definições o objeto

produto.nome = 'mudei o nome' // nao consigo por conta da defineProperty()

console.log(Object.values(produto)) // mostra apenas o valores
console.log(Object.keys(produto)) // mostra a chaves
// console.log(Object.entries(produto)) // le os dois em arrays / e possivel iterar os objetos

for(let [chave,valor] of Object.entries(produto)) { // iterando sobre os objetos
    console.log(chave, valor)// console exibe: nome mudei o nome preco 20
}
