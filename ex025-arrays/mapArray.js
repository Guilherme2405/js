const arrayNum = [5,10,7,9,20,35,50,77];

const numEmDobro = arrayNum.map(valor => valor * 2);
// map === retorna o array com mesmo tabanho, diferente de filtro
console.log(numEmDobro)


const pessoas = [
    {nome: 'guilherme', idade: 23},
    {nome: 'raquel', idade: 44},
    {nome: 'otavio', idade: 19},
    {nome: 'bruna', idade: 25},
    {nome: 'dalva', idade: 68}
];
//retorne apenas nome:
const apenasNome = pessoas.map(pessoas => pessoas.nome)
console.log(apenasNome)

//retorne apenas idade:
const idadeUm = pessoas.map(pessoas => pessoas.idade) // 1 modo

// const idadeDois = pessoas.map(pessoas => {
//     delete pessoas.nome;
//     return pessoas;
// }) 2 modo

// const idadeTres = pessoas.map(pessoas => ({idade: pessoas.idade}) ); 3 modo

console.log(idadeUm)

// retorne um id para cada elemento

const comIds =  pessoas.map((pessoas, indice) => { //mexe no array original
    // para nao ocorrer no array original crie um novo array
    const newPessoas = {...pessoas};
    newPessoas.id = (indice + 1)
    return newPessoas;
})

console.log('array modificado: ', comIds)
console.log('array original: ', pessoas)