const form = document.querySelector('#formulario')
// document === recebe doucmentos do html
// querySelector === um metodo que permite buscar documentos
form.addEventListener('submit', function (evento) {
// addEventListener === adicionar um evento

    evento.preventDefault();
// preventDefault === impede de receber valores vazios dos input's
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    
    console.log(inputPeso, inputAltura)

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
// essas const*(var) sao para recebr o valor do input no form do HTML
    console.log(peso, altura)

    if (!peso) {
        setResultado('peso invalido', false);
        return;
    }

    if (!altura) {
        setResultado('altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
// grava o valor do peso e da altura do input do HTML
    const nivelImc = getNivelImc(imc);
// retorna a string da função getImc
    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true)
// manda os dados para a função
    console.log(imc, nivelImc);
});

function getNivelImc(imc) {
// essa função retorna as strings do array de acordo com o IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    // esse array facilita na digitalização do codigo
    if (imc < 18.5) return nivel[0];
    else if (imc <= 24.9) return nivel[1];
    // return === encerra a função e envia algum valor
    else if (imc <= 29.9) return nivel[2];
    else if (imc <= 34.9) return nivel[3];
    else if (imc <= 39.9) return nivel[4];
    else if (imc >= 40) return nivel[5];

}


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
// toFixed === permite arredondar um número para um número específico de casas decimais
}

function criaP() {

    const p = document.createElement('p');
// createElement === é uma função que cria um elemento HTML, que pode ser inserido em um documento HTML
    return p;
}

function setResultado(msg, isvalid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
//innerHTML === é uma propriedade do Element que permite definir ou obter o conteúdo HTML de um elemento

    const p = criaP();
    if (isvalid) {
        p.classList.add('.resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    //appendChild === é um método que adiciona um elemento ao final da lista de filhos de um elemento pai

}








