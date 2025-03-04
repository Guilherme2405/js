const listaTarefa = document.querySelector('.listaTarefa');
const registra = document.querySelector('.registra');
const captura = document.querySelector('.captura');
const marca = document.querySelector('.marca');



captura.addEventListener('click', function(){
//criando a tag li para ser adicionada na lista toda vez q reber p evento

const marcaLista = document.createElement('li');

 const tarefa = document.createTextNode(registra.value);
 const tarefaNaLista = marcaLista.appendChild(tarefa);

 document.querySelector('.marca').appendChild(marcaLista);

//criando botao de remover tarefa

const botao = document.createElement('button');
const botaoRemove = marcaLista.appendChild(botao);

botao.setAttribute('class', 'removeTarefa')
botao.innerText = 'remover tarefa'

console.log(botao.parentElement);

botao.addEventListener('click', function() {
    botao.parentElement.remove();
    salvarTarefa() 
})

salvarTarefa()
adicionaTarefasSalvas()
});



function salvarTarefa() {
    const guardaTarefas = marca.querySelectorAll('li');
    const arrTarefas = [];

    for (let marca of guardaTarefas) {
       let marcatexto = marca.innerText;
       marcatexto = marcatexto.replace('remover tarefa', '').trim();
       
       arrTarefas.push(marcatexto);

    }
    const marcaJson = JSON.stringify(arrTarefas);
    localStorage.setItem('marca', marcaJson);
}

function adicionaTarefasSalvas() {
    const marca = localStorage.getItem('marca');
    const listaTarefa = JSON.parse(marca)

    for (let marcas of listaTarefa) {

    }
    console.log(listaTarefa)
};

