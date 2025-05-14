//Usando JS para alterar background-color da tag P
const paragrafo = document.querySelector('.paragrafo')
const ps = paragrafo.querySelectorAll('p');
const t1 = document.querySelector('h1');

const estilosBody = getComputedStyle(document.body);
const bgcBody = estilosBody.backgroundColor;
console.log(bgcBody);



for (let p of ps) {
   console.log(p)

  p.setAttribute("style",`background-color:${bgcBody};color: green; margin: 10px;`);
    //outro modo (settAttribute) de adicionar/alterar atributos

p.style.borderRadius = '10px';
p.style.textShadow = ' 2px 2px 2px rgba(0, 100, 0, 0.548)';

    // p.style.backgroundColor = bgcBody
    // p.style.color = 'rgb(101, 175, 95)'
    // um dos modo de adicionar/alterar atributos 
  }
  t1.style.padding = '5px';