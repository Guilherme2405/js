export const nome ='guiga';
export const sobrenome ='kirin';
export const idade = 23;
const naoImportado = 'nao sera importado' // itens sem export podem ser tratadas como privadas
function soma(x,y) { // default permite q itens possam ser trocado de nome diretamente
    return x + y
}

export class Pessoa {
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export {nome,sobrenome,idade,soma}; // exportando itens
// export {nome as nome2,sobrenome,idade,soma}; // e possivel exportar os itens com nomes diferentes utilizando as
export {soma as default }; // exportand como default

//geralmente e usada a exportação geral

// tambem geralmente a opção default class e usada a exportação de default