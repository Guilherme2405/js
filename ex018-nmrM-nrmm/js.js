// Criando um algoritmo que faça a soma entre dois parametros e a cada soma mostre o maior e o menor resultado
function maiorMenor(numUm,numDois) {

    for (i = 0; i <= 4 ; i++) {
        let resultadoum = Math.random() * numUm * numDois
        let resultado = Math.trunc(resultadoum)
        console.log(resultado)
        if (resultado > resultado) {
            console.log(`seu maior resultado: ${resultado}`)
        }
    }    
};

console.log(maiorMenor(4,10));