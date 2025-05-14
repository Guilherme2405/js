
(function(){
    const main = document.querySelector('.main');
    let produtos = document.createElement('div');
    produtos.classList.add('produtos');
    document.querySelector('.main').appendChild(produtos);

    const celular = JSON.parse(localStorage.getItem('iphone')) || [];
    //<div class="divImagem"><img src="${e.imagens}" alt=""></div>
    celular.forEach((e,index) => {
        const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.preco); 
        produtos.innerHTML += 
        `
        <div class="celulares">
        <div class="divImagens">${e.imagem}</div>
        <div class="modelo">${e.modelo}</div>
        <div class="armazenamento">${e.armazenamento}</div>
        <div class="preco">${(preco)}</div>

        <button type="button" class="addCarrinho"  value="${index}">Adicionar ao carrinho</button><br>
        </div>
        `
    });
})();

(function (){ //adiciona itens ao carrinho
    let meuCarrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];

    document.querySelectorAll('.addCarrinho').forEach((value) => {
        
        value.addEventListener('click', (e)=>{
        const values = Number(value.getAttribute('value'));
        const celulares = JSON.parse(localStorage.getItem('iphone'));

        if(celulares[values].disponivel === false || celulares[values].estoque < 1) {
            alert('celular indisponivel')
        }else{
            JSON.parse(localStorage.getItem('meuCarrinho'));
            meuCarrinho.push(celulares[values]);
            localStorage.setItem('meuCarrinho',JSON.stringify(meuCarrinho));
            celulares[values].estoque -= 1;
            if(celulares[values].estoque < 1){
                celulares[values].disponivel = false
                localStorage.setItem('iphone',JSON.stringify(celulares));
            }
            localStorage.setItem('iphone',JSON.stringify(celulares));
        }
        
        });
        
    });
})();

(function(){ //mostrando itens no html
        let meuCarrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];
        meuCarrinho.forEach((e,index) => {
            const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.preco); 
            document.querySelector('.itemCarrinho').innerHTML += 
            `
                <li><div class = "">${e.modelo}</div> <div class = "">${e.armazenamento}</div><div class = "">${e.cor}</div> <div class = "">${preco}</div> <div class = ""><button type="button" class="removeCarrinho"  value="${index}">Remover do carrinho</button></div> 
            `;

            let valor = 0;
            for (let i = 0; i < meuCarrinho.length; i++) valor += e.preco;

            const conversaoTotal= new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
            document.getElementById('total').innerHTML = `total a pagar${conversaoTotal}`;
            
            document.querySelectorAll('.removeCarrinho').forEach((value,indice) => {
                const meuCarrinho = JSON.parse(localStorage.getItem('meuCarrinho'));
                value.addEventListener('click', (e,index)=>{
                    
                    console.log(value)
                    meuCarrinho.splice(value,1)
                    localStorage.setItem('meuCarrinho',JSON.stringify(meuCarrinho));
                })
            });
        });
    })();