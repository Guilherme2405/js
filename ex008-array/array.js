/*
const alunos = ['luiz', 'maria', 'joao']; // array == vetores; 
//lembrando que a variavel começa a contagem com o numero 0, ou seja o primeiro elemento gravado e reconhecido como 0 caso ele for uma string


alunos [0] = 'eduardo'; // e possivel mudar o elemento do array ao mudar a declarar no numero salvo da variavel
alunos [3] = 'guiga';  //tambem e possivel adicionar um elemento dentro de uma variavel
console.log(alunos);

*/

/*

[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex008-array\array.js"
[ 'eduardo', 'maria', 'joao', 'guiga' ]

[Done] exited with code=0 in 0.059 seconds

*/

/*
const alunos = ['luiz', 'maria', 'joao']; 

alunos[alunos.length] = 'marcos'; // alunos[alunos.length] == 'x' == aumenta o array
alunos[alunos.length] = 'marcio';
alunos[alunos.length] = 'maria';

console.log(alunos.length); // mostra o tamanho do nosso array

alunos [0] = 'eduardo'; // e possivel mudar o elemento do array ao mudar a declarar no numero salvo da variavel
alunos [3] = 'guiga';  //tambem e possivel adicionar um elemento dentro de uma variavel
console.log(alunos);

[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex008-array\array.js"
6
[ 'eduardo', 'maria', 'joao', 'guiga', 'marcio', 'maria' ]

[Done] exited with code=0 in 0.065 seconds

*/

/* 
const alunos = ['luiz', 'maria', 'joao']; 

alunos.unshift('gui'); //adiciona nomes ao começo
alunos.unshift('guiga')

//alunos.push('guiga'); // tambem e possivel adicionar elementos ao array usando .push
//alunos.push('gui');
//alunos.push('guizin');

console.log(alunos);
*/

/* 
const alunos = ['luiz', 'maria', 'joao']; 

const removido = alunos.pop('joao, maria') // alunos.pop == remove do array

alunos.unshift('gui'); 
alunos.unshift('guiga');

console.log(removido); //mostra os elementos removidos
console.log(alunos);

 
//[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex008-array\array.js"
//joao
//[ 'guiga', 'gui', 'luiz', 'maria' ]
*/

/*
const alunos = ['luiz', 'maria', 'joao']; 

delete alunos['luiz'];//delete alunos[]; == deleta alunos do array

alunos.unshift('gui'); 
alunos.unshift('guiga');

console.log(alunos);


[Running] node "c:\Users\guiga\OneDrive\estudos\js\ex008-array\array.js"
[ 'guiga', 'gui', 'luiz', 'maria', 'joao' ]
 */

const alunos = ['luiz', 'maria', 'joao']; 
alunos.push ('gui','guiga','guigao');


console.log(alunos)
console.log(alunos.slice(2)) // console.log(alunos.slice(0,3)) == do de um elemento ate o outro, isso pode ser definido, pode ser usado com numero negativo









