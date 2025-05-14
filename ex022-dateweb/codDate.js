function criaHoraSec(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false, 
        timeZone: 'GMT'
        
    }) 
// toLocaleTimeString == e possivel modificar datas
}


const cronos = document.querySelector('.cronos');
const temp = document.querySelector('.temp');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let segundos = 0;
let timer;

function iniciaRelogio() {
     timer = setInterval(function() {
        segundos++;
        temp.innerHTML = criaHoraSec(segundos);
    }, 1000);
}

/*
play.addEventListener('click', function() {
temp.classList.remove('pausado')
    clearInterval(timer) 
    // responsavel por nao deixar inteferir nos nas variaveis de dentro e fora da função
    iniciaRelogio();
});

pause.addEventListener('click', function() {
    temp.classList.add('pausado')
    clearInterval(timer)
});

play.addEventListener('click', function() {
    clearInterval(timer)
    temp.innerHTML = '00:00:00'
});
*/

//todo evendo acima foi trocado por esse exemplo abaixo
document.addEventListener('click', function(e) {
    console.log(e.target)// mostra todos elementos onde clica na pagina

    const el = e.target;

    if (el.classList.contains('play')) {
    clearInterval(timer) 
    // responsavel por nao deixar inteferir nos nas variaveis de dentro e fora da função
    iniciaRelogio();
    }

    if (el.classList.contains('pause')) {
        temp.classList.add('pausado')
        clearInterval(timer)
    }

    if (el.classList.contains('reset')) {
        temp.classList.remove('pausado')
        clearInterval(timer)
        temp.innerHTML = '00:00:00'
    }
})



