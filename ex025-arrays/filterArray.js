/* array com filter
const arrayNum = [5,10,7,9,20,35,50,77];

const novoArrayNum = arrayNum.filter( (valor,indice,array) => {
    
 console.log('valor: ' + valor,'indice: ' +indice,'arrayy: ' + array)
 return valor > 20 // -> cria um novo array com elementos maiores que 20 
})


*/

const pessoas = [
    {nome: 'guilherme', idade: 23},
    {nome: 'raquel', idade: 44},
    {nome: 'otavio', idade: 19},
    {nome: 'bruna', idade: 25},
    {nome: 'dalva', idade: 68}
];

const pessoasNomeGrande = pessoas.filter( obj => obj.nome.length >= 6);
const checaIdade = pessoas.filter( obj => obj.idade <= 25);
//const letraFinalNome = pessoas.filter( (obj) => obj.nome.slice(-1) === 'a'); //pega o ultimo indice do proprio nome


const letraFinalNome = pessoas.filter((obj) => {

    return obj.nome.toLowerCase().endsWith('a')});

   // toLowerCase() === deixa a string em letras minusculas
   // endsWith('exemplo') === se termina com 'exemplo'



console.log('nomes grandes')
console.log(pessoasNomeGrande)
console.log()
console.log('idade abaixo ou igual de 25')
console.log(checaIdade)
console.log()
console.log('nome com a letra final A')
console.log(letraFinalNome)