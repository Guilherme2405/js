class ValidaSenha{
    constructor(senha,confirmSenha){
        this.senha = senha;
        this.confirmSenha = confirmSenha;
        this.validador(senha,confirmSenha)
    }

    validador(senha,confirmSenha){
        senha == confirmSenha ? console.dir('Senha valida') : console.dir('Senha invalida')
        if(senha == confirmSenha){
            const criaDiv = document.createElement("div");
            const textodiv = document.createTextNode("senha valida");
            criaDiv.appendChild(textodiv);
    
            const currentDiv = document.getElementById("div1");
            document.querySelector('#confirm').insertAdjacentElement('afterend',criaDiv, currentDiv).classList.add('senhaValida');
    
        }
        else{
            const criaDiv = document.createElement("div");
            const textodiv = document.createTextNode("senha invalida");
            criaDiv.appendChild(textodiv);
    
            const currentDiv = document.getElementById("div1");
            document.querySelector('#confirm').insertAdjacentElement('afterend',criaDiv, currentDiv).classList.add('senhaInvalida');
            
        }
    }
}