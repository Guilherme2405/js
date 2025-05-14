function retornaHora(data) {
    if (data && ! (data instanceof Date)) {
        //console.log('nao e')
        throw new TypeError('esperando instancia de Date')
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // mostra formato de horas em 24 horas
    });
}

//console.log(new Date()); // caso o parametro seja diferente disso ira retornar a frase 'nao e' 

try {
    const date = new Date('01-01-1970 12:58:12')
const hora = retornaHora(date);
console.log(hora);
} catch (e) {
    //tratar error
    console.log('error; coloque uma instancia ou deixe vazio')
} finally {
    console.log('tenha um bom dia')
}
