//faça uma funcao onde se o numero for dividido por tres ele retorne texto 'fiz' e se for divisivel por 5 retorne texto 'buzz' se for divisivel por 3 e 5 retorne fizzbuzz
//esse algoritmo nao pode aceitar numeros negativos e nem maiores que 100
//faça o algoritmo ver os numeros de 0 a 100 com um laço de repetição

function fizzBuzz(i) {

    if (i < 0, i > 100) {
        console.log('seu numero digitado para indice esta fora do valor programado, seu programa sera encerrado!')
        return console.log(i)
    }

    for (i; i <= 100; i++) {
        let div3 = i % 3;
        let div5 = i % 5;

        if (div3 === 0){
            console.log('fizz')
        } else if (div3 !== 0){
            console.log(div3);
        }

        if (div5 === 0){
            console.log('buzz')
        } else if (div5 !== 0){
            console.log(div5);
        }

        if (div3 , div5 === 0){
            console.log('FizzBuzz')
        }
    };
}
console.log(fizzBuzz(0));



