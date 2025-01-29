const horasDia = document.querySelector("#horasDia");
function horasSwitch() {
     horas = new Date()
     let diaSemana = horas.getDay()
    switch (diaSemana) {
        case 0: diaSemana = 'domingo';
        break;
        case 1: diaSemana = 'segunda';
        break;
        case 2: diaSemana = 'terça'; 
        break;
        case 3: diaSemana = 'quarta'; 
        break;
        case 4: diaSemana = 'quinta'; 
        break;
        case 5: diaSemana = 'Sexta'; 
        break;
        case 6: diaSemana = 'Sábado'; 
        break;
    }

 return horas, diaSemana;
}

function zeroEsquerda(num) {
    return num > 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroEsquerda (data.getDate());
    const mes = zeroEsquerda (data.getMonth() +1);
    const ano = zeroEsquerda (data.getFullYear());
    const horas = zeroEsquerda (data.getHours());
    const minutos = zeroEsquerda (data.getMinutes());
    const segundos = zeroEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

const data = new Date()
const dataHoje = formataData(data)
const diaEData = (`${horasSwitch()}: ${dataHoje}`)
console.log(`${horasSwitch()}: ${dataHoje}`)

horasDia.innerHTML =(horasSwitch() + "," + dataHoje)
