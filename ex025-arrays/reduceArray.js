// some todos os valores do array:
const arrayNum = [5,10,7,9,20,35,50,77];
const total = arrayNum.reduce((acumulador,valor) =>{
acumulador += valor;
console.log(acumulador, valor) // acumulador === mostra a soma; valor === valor do array;
return acumulador;
}, 0)

console.log(total)

// mostre a pessoa mais velha:
const pessoas = [
    {nome: 'guilherme', idade: 23},
    {nome: 'raquel', idade: 44},
    {nome: 'otavio', idade: 19},
    {nome: 'bruna', idade: 25},
    {nome: 'dalva', idade: 68}
];

const maisVelho = pessoas.reduce( (acumulador1,valor1) => {
   if (acumulador1 > valor1) return acumulador1;
   return valor1; 
})
console.log(maisVelho);