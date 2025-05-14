/*

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'

    // __proto__ : Object.prototype
}; 

const objB= {
    chaveA: 'B'
    // __proto__ :objA
}

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB,objA)
Object.setPrototypeOf(objC,objB)
console.log(objB.chaveA)
console.log(objC.objB)
*/
 function Produto(nome,preco){
    this.nome = nome
    this.preco = preco
 };

valor = 10;
 Produto.prototype.desconto = function(percentual){this.preco =  this.preco - (this.preco * (percentual/100))}
 Produto.prototype.aumento = function(percentual){this.preco = this.preco + (this.preco * (percentual/10))}

 const p1 = new Produto('sub placa', 55)
p1.desconto(30)
 const p2 = {
    nome: 'caneca',
    preco: 15
 }

/* p3
 const p3 = Object.create(Produto.prototype) // Object.create(Object.prototype) == cria um objeto normal
 p3.preco = 115
 p3.desconto(10)
*/

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 'martelo'
    },
    preco:{
        writable:true,
        configurable:true,
        enumerable:false, //se for false deixa de exibir no console
        value: 154
    },
    peso: {
        writable:true,
        configurable:true, // permite que eu possa fazer alterações e ate mesmo remover 
        enumerable:true,
        value: 3.66
    }
})
p3.desconto(33)
delete p3.peso // remove a prioridade peso

 Object.setPrototypeOf(p2,Produto.prototype) // setPrototypeOf tem como objetio usar prototype da Função construtora
 p2.aumento(50)

 console.log(p1)
 console.log(p2)
 console.log(p3)

  for (var i in p3) { //passa o p3 em forIn
     console.log(i);
   }



