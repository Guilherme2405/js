// retorne a soma dos numeros pares
// passo 1 = filtrar pares
// passo 2 = dobrar valor
// passo 3 = reduzir tudo(soma)

const num = [5,10,7,9,20,35,50,77];

const numPares = num.filter(valor => valor %2 === 0);
console.log('array de numeros pares: ', numPares)

const dobraPares = numPares.map((valor) => valor * 2)
console.log('array de dobra dos pares: ', dobraPares)

const somaDobra = dobraPares.reduce((acumulador, valor) => { return acumulador + valor})
console.log('array de soma da dobra: ', somaDobra)


