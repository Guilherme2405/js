function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function (){
        console.log('f1')
        if (callback) callback()
    }, rand())
}
function f2(callback) {
    setTimeout(function (){
            console.log('f2')
            if (callback) callback()
    }, rand())
}
function f3(callback) {
    setTimeout(function (){
        console.log('f3')
        if (callback) callback()
    }, rand())
}
/* callback hell
f1 (function() {
    f2 (function() {
        f3 (function(){
            console.log('ola mundo')
        })
    })
})
 */

f1(chamaUm);

function chamaUm() {
    f2(chamaDois)
}
function chamaDois() {
    f3(chamaTres)
}
function chamaTres() {
    console.log('ola mundo')
}
