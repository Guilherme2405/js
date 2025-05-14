function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this) //Object.freeze() == impossibilita mudança no objeto
};

const p1 = new Pessoa('guiga', 'kirin');
const p2 = new Pessoa('tata', 'zin')

console.log(p1)
console.log(p2)