const form = document.querySelector('#formulario')

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    console.log(inputPeso, inputAltura)

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
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
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true)

    console.log(imc, nivelImc);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    if (imc < 18.5) return nivel[0];
    else if (imc <= 24.9) return nivel[1];
    else if (imc <= 29.9) return nivel[2];
    else if (imc <= 34.9) return nivel[3];
    else if (imc <= 39.9) return nivel[4];
    else if (imc >= 40) return nivel[5];

}


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {

    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isvalid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if (isvalid) {
        p.classList.add('.resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);

}








