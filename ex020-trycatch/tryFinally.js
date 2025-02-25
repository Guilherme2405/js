try {
// console.log(a);
 console.log('abri arquivo');
 console.log('manipulei arquivo');
 console.log('fechei arquivo');

try {
    console.log(b);
} catch (e){
    console.log('deu erro');
} finally {
    console.log('tambem sou finally');
}

} catch (e) {
    console.log('tratando erro');
}   finally {
    //sempre
    console.log('se der erro ou nao, eu sempre sou executado')
}
