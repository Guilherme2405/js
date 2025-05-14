
fetch('livros.json')
.then(response => response.json()) 
.then(livros => {
    console.log(livros)
    return exibeLivros(livros)
})

function exibeLivros(livros){
    const listaDeLivros = document.querySelector('.listaDeLivros');
    livros.forEach(element => {
        console.log(element)
        listaDeLivros.innerHTML += 
        `
        <td>
        ${element.titulo}
        </td>

        <td>
        ${element.autor}
        </td>
        
        <td>
        ${element.ano}
        </td>
        `
    });

}


