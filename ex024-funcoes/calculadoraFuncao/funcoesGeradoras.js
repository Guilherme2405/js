function* geradora1() {
    //codigo qualquer
    yield 'valor1';
    //codigo qualquer
    yield 'valor2';
    //codigo qualquer
    yield 'valor3 ';
}
const g1 = geradora1();
/* exibir valor
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value) // entra um valor por vez
console.log(g1.next())
*/
/* exibir valor for
for (valor of g1) {
    console.log(valor)
}
    */

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield*geradora3();
    yield 3;
    yield 4;
    yield 5;
}
/*
const g4 = geradora4();
for (let valor of g4) {
    console.log(valor)
}
*/
function* geradora5(){
    yield function(){
        console.log('vim do y1');
    }
    return function (){
        console.log('vim do return') // volta apenas valores do return e acima
    }
    yield function() {
        console.log('vim do y2')
    };
}

const g5 = geradora5()
const func1 = g5.next().value;
const func2 = g5.next().value; 

func1()
func2()