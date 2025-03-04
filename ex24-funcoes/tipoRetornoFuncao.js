// return === retorma valor; termina função
/*
function soma(a,b) {
    return a + b;
}


console.log(soma(3,4))

function soma2(a,b) {
    console.log( a + b);
}

soma2(5,2)
*/


/*
document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'grey';
});
*/

/*
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}

const pessoaUm = criaPessoa('guiga', 'kirin');
const pessoaDois = {
    nome: 'guilherme',
    sobrenome: 'cataneo'
};

console.log( pessoaUm); // mostra o tipo
console.log( pessoaDois);
*/

/*
function falaFrase(comeco) {
    function falaresto(resto) {

        return comeco + ' ' + resto;
    }
    return falaresto;
}

const fala = falaFrase('ola')

const resto = fala('mundo')
console.log(resto)
*/

function criaMult(multiplicador) {
    function multiplica(num) {
        return num * multiplicador;
    }

    return multiplica
}

const numMult = criaMult(3);
const number = numMult(5)
console.log(number)




