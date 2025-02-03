
 const elementos = [
    {tag: 'p', texto: 'faça o que voce quiser'}, //0
    {tag: 'div', texto: 'frase 2'}, //1
    {tag: 'footer', texto: 'frase 3'}, //2 
    {tag: 'section', texto: 'frase 4'}, //3

 ];

const corpo = document.querySelector('.corpo');
const div = document.createElement('div.gg');

 for (let i = 0; i < elementos.length; ++i) {
   let {tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
   tagCriada.innerHTML = texto; // tambem e possivel usar innerText para adicionar apenas texto
   div.appendChild(tagCriada)

 }
 
 corpo.appendChild(div);


