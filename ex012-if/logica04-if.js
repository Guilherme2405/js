/*

entre 0 - 11 - Bom dia
entre 12 - 17 - Boa tarde
entre 18 - 23 - Boa noite

*/

const hora = 45;

if (hora >= 0 && hora <=11) {
    console.log('Bom dia grupo');
} else if  (hora > 11 && hora < 18){
    console.log('Boa tarde familia')
} else if  (hora > 18 && hora <= 23) {
    console.log('boa noite!')
} else {
    console.log('olá'); // so posso usar o apenas else no final
}

/* posso usar if e apenas else para condicionais simples */