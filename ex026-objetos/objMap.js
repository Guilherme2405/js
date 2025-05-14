const pessoas = [
    {id: 3,nome:'guiga'},
    {id: 2,nome:'tata'},
    {id: 1,nome:'bruna'},
];

/*
const novasPessoas = {};
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas[id] = {...pessoa};
} 
 */

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}
console.log(novasPessoas)

for (const [i, {id,nome}] of novasPessoass) {
    console.log(i,id,nome)
}