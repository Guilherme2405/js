fetch("./celulares.json") // consumindo arquivo do modelos de celulares
.then(response => response.json()) // passando arquivo apenas como json
.then(response => {
    const celulares = JSON.parse(localStorage.getItem('arquivoJson')) || [];
    const jsonCel = JSON.stringify(response);
    localStorage.setItem('arquivoJson', jsonCel); // criando chave arquivoJSON com os produtos
    return response
    
})
.then((response) => {
    const iphone = localStorage.getItem('iphone');
    if(!iphone || iphone === '') {
        localStorage.setItem('iphone',JSON.stringify(response)); //se a chave iphone(V || F) for igual a '' adiciona os produtos do arquivoJSON
    };
});

class Produto {
    constructor(modelo, armazenamento, cor, preco,disponivel,estoque) {
        this.modelo = modelo;
        this.armazenamento = armazenamento;
        this.cor = cor;
        this.preco = preco;
        this.disponivel = disponivel;
        this.estoque = estoque;
        
    };
}

// Função para adicionar um produto
document.getElementById('registrar').addEventListener('submit', function(e){
    
    e.preventDefault(); // Evitar o envio do formulário

    // Obter os valores dos campos de entrada
    const produtos = JSON.parse(localStorage.getItem('iphone')) || [];
    const modelo = document.getElementById('modelo').value;
    const armazenamento = document.getElementById('armazenamento').value;
    const cor = document.getElementById('cor').value;
    const preco = document.getElementById('preco').value;
    const disponivel = document.getElementById('disponivel').value;
    const estoque = document.getElementById('estoque').value;

    console.log(modelo, preco, cor, estoque);

    const produto = new Produto(modelo, armazenamento, cor, preco,disponivel,estoque);
    console.log(produto);

    produtos.push(produto);// Adicionar o produto ao array de produtos

    localStorage.setItem('iphone', JSON.stringify(produtos));// Salvar o array atualizado no localStorage
});

(function() { // lista produtos na tabela
    const produtos = JSON.parse(localStorage.getItem('iphone')) || [];
    produtos.forEach((produtos,indice) => {
    const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produtos.preco);
    document.getElementById('tabelaBody').innerHTML +=
        `
        <tr>
        <td class="valores" value="${(indice++)}">${indice}</td>
        <td class="valores">${produtos.modelo}</td>
        <td class="valores">${produtos.armazenamento}</td>
        <td class="valores">${produtos.cor}</td>
        <td class="valores">${preco}</td>
        <td class="valores">${produtos.disponivel}</td>
        <td class="valores">${produtos.estoque}</td>
        <td class="valores">${produtos.imagem}</td>
        <td class="botoes"><button class="editaItem">editar</button></td>
        <td class="botoes"><button class="removeItem" type="button"  colspan="3">remover</button></td>
        </tr>
        `
    });

}());

(function() { //função para remover itens
    document.querySelectorAll(".removeItem").forEach((value,indice)=>{
        value.addEventListener('click',function(e){
        const produtos = (JSON.parse(localStorage.getItem('iphone')) || []);
        produtos.splice(indice,1);// remove o produto ao array de produtos
        localStorage.setItem('iphone', JSON.stringify(produtos));// Salvar o array atualizado no localStorage
        });
        
    });
})();

(function() { // função para editar itens
    document.querySelectorAll(".editaItem").forEach((value,indice) =>{
        value.addEventListener('click',(e)=>{
            e.preventDefault()
            const divItemEditado = document.createElement("div"); // criando elementos div
            divItemEditado.classList.add('editarItem'); //adicionando classe as divs
            document.querySelector('#editorDeItens').innerHTML =  
            `
            <form action="" class="editaProduto">
            <h2>Edita Produto</h2>
        
            <label for="editaModelo">modelo:</label>
            <input type="text" id="editaModelo" name="editaModelo" class="formEditor"><br>

            <label for="editaArmazenamento">armazenamento:</label>
            <input type="text" id="editaArmazenamento" name="nome" class="formEditor"><br>

            <label for="editaCor">Cor:</label>
            <input type="text" id="editaCor" name="nome" class="formEditor"><br>

             <label for="editaPreco">Preço (R$):</label>
            <input type="number" id="editaPreco" name="preco" step="0.01" min="0" class="formEditor"><br>
        
            <label for="editaDisponivel">disponivel:</label>
            <input id="editaDisponivel" name="descricao" rows="1" class="formEditor"></input><br>
        
            <label for="editaEstoque">Estoque:</label>
            <input type="number" id="editaEstoque" name="estoque" min="0" class="formEditor"><br>
            

            <label for="editaImagem">imagem:</label>
            <input type="file" class="botao" id="editaImagem" name="estoque" min="0"><br>
        
            <button type="submit" class="botao" id="salvaItem">Salvar Alterações</button>
            </form>
            `;
           
    
            document.getElementById('salvaItem').addEventListener('click', function(e){
                e.preventDefault()
                const editaModelo = document.getElementById('editaModelo').value;
                const editaArmazenamento = document.getElementById('editaArmazenamento').value;
                const editaCor = document.getElementById('editaCor').value;
                const editaPreco = document.getElementById('editaPreco').value;
                const editaDisponivel = document.getElementById('editaDisponivel').value;
                const editaEstoque = document.getElementById('editaEstoque').value;
                const editaimagem = document.getElementById('editaImagem').value;
    
                const iphone = (JSON.parse(localStorage.getItem('iphone')) || []);
                
                editaModelo !== '' ? iphone[indice].modelo = editaModelo : iphone[indice].modelo = iphone[indice].modelo;
                editaArmazenamento !== '' ? iphone[indice].armazenamento = editaArmazenamento : iphone[indice].armazenamento = iphone[indice].armazenamento;
                editaCor !== '' ? iphone[indice].cor = editaCor : iphone[indice].cor = iphone[indice].cor;
                editaPreco !== '' ? iphone[indice].preco = editaPreco : iphone[indice].preco = iphone[indice].preco;
                editaDisponivel !== '' ? iphone[indice].preco = editaDisponivel : iphone[indice].disponivel = iphone[indice].disponivel;
                editaEstoque !== '' ? iphone[indice].estoque = editaEstoque : iphone[indice].estoque = iphone[indice].estoque;
                editaimagem !== '' ? iphone[indice].imagem = editaEstoque : iphone[indice].imagem = iphone[indice].imagem;
                localStorage.setItem('iphone', JSON.stringify(iphone));
                console.log(editaModelo)
                    
            });
            const editor = document.querySelector('#editorDeItens')
            editor.style.backgroundColor = "white";
        });
    });
})();

function faturamentoDaEmpresa(){
    const valorVendido = document.querySelector('#valorVendido');
    const vendas = JSON.parse(localStorage.getItem('vendas')) || [];
    const faturamento = document.querySelector('#faturamentoL');

    let faturamentoTotal = 0;
        for (let i = 0; i < vendas.length; i++) {
            faturamentoTotal += vendas[i].preco;
            console.log(faturamentoTotal)
        }
    vendas.forEach(e => {
        const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.preco);
        valorVendido.innerHTML += `<li class="itens"><div class="modelo">${e.modelo}</div> <div class="preco">${preco}</div></li>`;

        const valorFaturamento = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(faturamentoTotal);
        faturamento.innerHTML = `<div id="fatura">valor total faturado: ${valorFaturamento}</div>`;
        
        
    });
    
}faturamentoDaEmpresa();
