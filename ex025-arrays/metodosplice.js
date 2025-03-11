const nomes = ['maria', 'joao', 'lucas','matheus', 'lorena']

// const removidos = nomes.splice(-5, 3) usado para removeer
// const removidos = nomes.splice(5, 2, 'guilherme', 'cataneo') // usado para add
//console.log(nomes,removidos);
console.log(Number.MAX_VALUE); // checa ate o ultimo elemento do array

//pop
 nomes.splice(1, 2) 
 console.log(nomes); //removeu joao

 //shift
 nomes.splice(0, 1) // perdeu a maria
 console.log(nomes);

 //push
 nomes.splice(nomes.length, 0, 'guilherme') // adicionou guilherme
 console.log(nomes);

 //unshift
 nomes.splice(0, 0, 'guilherme');
 console.log(nomes);

// nomes.splice(indice,delete,addelementos)



