fetch('notasAlunos.json')//pegando arquivo
.then(response => response.json())//selecionando somente o json
.then(objDoJson => {
    console.log(typeof objDoJson);
    return calculaMedia(objDoJson) //retornando array de objetos dentro da função
})

function calculaMedia(objDojson){
    const tabela = document.querySelector('#tabelaAlunos') // DOM
    objDojson.forEach(e => { //usando forEach para tratar elementos do array de objetos
       let media = (e.notas.reduce((acumulador,nota) => acumulador += nota, 0) / e.notas.length).toFixed(2); // calculando media
       let situacao = "";
        media < 7 ? situacao = "reprovado" : situacao = "aprovado"; // verificando media
    tabela.innerHTML += 
    `
        <td>
        ${e.aluno}
        </td>

        <td>
        ${e.notas}
        </td>

         <td>
        ${media}
        </td>    
        <td>
        ${situacao}
        </td>     
    `
})
}