function carrinho(){ //mostrando itens no html
    let meuCarrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];
    let iphone = JSON.parse(localStorage.getItem('iphone')) || [];
    meuCarrinho.forEach((e,index) => {

        document.querySelectorAll('.opcoes').forEach(opcoes => {
            opcoes.addEventListener('click', () =>{
                
                if (opcoes.value === 'cartao'){
                    document.querySelector('#qrCode').innerHTML = ``;
    
                    document.querySelector('#parcelas')
                        .innerHTML = 
                        `
                            <form>
                            <fieldset>
                                <legend>Escolha o número de parcelas:</legend>
                                <!-- Radios de 1 a 12 -->
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas1" class="nmrParcelas" value="1"> 1x de  ${valor}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas2" class="nmrParcelas" value="2"> 2x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/2)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas3" class="nmrParcelas" value="3"> 3x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/3)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas4" class="nmrParcelas" value="4"> 4x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/4)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas5" class="nmrParcelas" value="5"> 5x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/5)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas6" class="nmrParcelas" value="6"> 6x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/6)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas7" class="nmrParcelas" value="7"> 7x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/7)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas8" class="nmrParcelas" value="8"> 8x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/8)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas9" class="nmrParcelas" value="9"> 9x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/9)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas10" class="nmrParcelas" value="10"> 10x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/10)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas11" class="nmrParcelas" value="11"> 11x de ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/11)}
                                </label><br>
                                <label>
                                <input type="radio" name="nmrParcelas" id="nmrParcelas12" class="nmrParcelas" value="12"> 12${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor/12)}
                                </label>
                            </fieldset>
                            </form>
                            `;
                    
                }
                else if (opcoes.value === 'pix'){
                    document.querySelector('#parcelas').innerHTML = ``;
                    document.querySelector('#qrCode').innerHTML = `<img src="logo-loja/qr-pagamento.png" alt="qrcode" id="qrCodeImg">`
                }
                else {console.log(opcoes.value)};
                });
            }); 
        
    const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.preco); 
    document.querySelector('.itemCarrinho').innerHTML += 
    `
        <li class="listaItem"><div class = "">${e.modelo}</div> <div class = "">${e.armazenamento}</div><div class = "">${e.cor}</div> <div class = "">${preco}</div> <div class = ""><button type="submit" class="removeCarrinho botaoFinaliza" id="${e.id}" value="${index}">Remover do carrinho</button></div> 
    `;

    let valor = 0;
    for (let i = 0; i < meuCarrinho.length; i++) valor += e.preco;

    

    const conversaoTotal= new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    document.getElementById('total').innerHTML = `total a pagar${conversaoTotal}`;
    
    document.querySelectorAll('.removeCarrinho').forEach((value,indice) => {
        const meuCarrinho = JSON.parse(localStorage.getItem('meuCarrinho'));
        value.addEventListener('click', (e,index)=>{
            window.location.reload();
            console.log(value);
            meuCarrinho.splice(value,1)
            localStorage.setItem('meuCarrinho',JSON.stringify(meuCarrinho));

            iphone[value.id].estoque += 1;
            if(iphone[value.id].disponivel === false)iphone[value.id].disponivel = true;
            localStorage.setItem('iphone',JSON.stringify(iphone));
        });
    });

    
    });
} carrinho();

function finalizaPagamento(){

    document.querySelector('#finalizaCompra').addEventListener('click',(e) => {
        const meuCarrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];
        const iphone = JSON.parse(localStorage.getItem('iphone')) || [];
        const venda = JSON.parse(localStorage.getItem('vendas')) || [];
        

        if(!meuCarrinho || meuCarrinho != ''){
            meuCarrinho.forEach((e,i) => {
                if(iphone[e.id].estoque >= 1){
                    iphone[e.id].estoque -= 1;
                }else if (iphone[e.id].estoque === 1) {
                    iphone[e.id].estoque -= 1;
                    iphone[e.id].estoque = 0;
                } else {
                    iphone[e.id].disponivel = false;
                }
                localStorage.setItem('iphone',JSON.stringify(iphone));

                const vendas = new Vendas(iphone[e.id].modelo,iphone[e.id].preco, iphone[e.id].disponivel)
                venda.push(vendas)
                localStorage.setItem('vendas',JSON.stringify(venda));
            });
        
            const body = document.querySelector('body');
            meuCarrinho.forEach(e => {
                const preco = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.preco); 
                document.querySelector('#itens').innerHTML +=
                  `
                    <li class="listaComprados"><div class="notaModelo">${e.modelo}</div> <div class="notaArm">${e.armazenamento}</div> <div class="notaCor">${e.cor}</div> <div class="notaPreco">${preco}</div></li>
                 `;
            });

        localStorage.setItem('meuCarrinho',JSON.stringify([]));
        let nav = document.querySelector('nav');
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
          }
        else {
            nav.style.display = 'none';
          }
    

            document.querySelector('#ok').addEventListener('click',e => {window.location.reload(true);});

        } else {
            alert("Não foi possivel prosseguir com a compra devido o carrinho vazio!");
        };
    });
} finalizaPagamento();

function mostraConta() {

}mostraConta();

class Vendas {
    constructor (modelo,preco,disponivel){
        this.modelo = modelo;
        this.preco = preco;
        this.disponivel = disponivel;
    }
}