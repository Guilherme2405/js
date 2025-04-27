

/* mudando nome do item com as

import {nome as nome2,sobrenome,idade,soma} from './exportando';
const nome = 'guilherme' 
// itens importados podem entrar em conflito por carregar mesmo nome
//e possivel renomear itens importados utilizando as

console.log(nome,nome2,sobrenome,idade,soma(3,4))
*/

/* importando item que foi mudado no arquivo exportador

import {nome2,sobrenome,idade,soma} from './exportando';
//nome de itens modificados no 
console.log(nome2,sobrenome,idade,soma(3,4))
*/

/*  utiliando a classe da outra pasta

import {nome as nome2,sobrenome,idade,soma,Pessoa} from './exportando';

const pessoa = new Pessoa('guiga','kirin')
console.log(pessoa)
*/

/* importando tudo

import * as ImportandoTudo from './exportando'
console.log(ImportandoTudo)
*/

/* trocando nome da função diretamente

import qualquerNome from './exportando' // importando a função como default
console.log(qualquerNome(3,4))
*/


import somador,{nome,sobrenome,idade,Pessoa} from './exportando';
console.log(nome,sobrenome,idade)
console.log(somador(4,3))

