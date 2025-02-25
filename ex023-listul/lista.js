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
console.log(marcaLista);

//criando botao de remover tarefa

const botao = document.createElement('button');
const botaoRemove = marcaLista.appendChild(botao);

botao.setAttribute('class', 'removeTarefa')
botao.innerText = 'remover tarefa'

console.log(botao.parentElement);

botao.addEventListener('click', function() {
    botao.parentElement.remove();
})

});

