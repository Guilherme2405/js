// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('erro, naoExisto nao existe');
//     console.log(err);
// } para tratar erros

function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser numeros') //podemos usar funções construtoras
    }
    return x + y;
}


try {
    console.log(soma(1,2));
    console.log(soma('1',2));
} catch(error) {
     // console.log(error);
     console.log('alguma coisa mais amigavel')
}