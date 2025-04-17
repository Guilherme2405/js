class ValidacaoForm{
    constructor(){
        this.form = document.querySelector('#form');
        this.elementos();

    }

    elementos() {

        this.form.addEventListener('submit', function(e){
            e.preventDefault()
            const nome = document.querySelector('#nome').value
            const sobreNome = document.querySelector('#sobrenome').value
            const cpf = document.querySelector(String('#cpf')).value
            const senha = document.querySelector('#senha').value
            const confirmSenha = document.querySelector('#confirm').value
            console.dir(cpf)
           const meuCPF = new ValidaCPF(cpf)
           console.log(typeof senha, typeof confirmSenha)
           const verificaSenha = new ValidaSenha(senha,confirmSenha)
           const verificaNome = new ValidaNomeSobrenome(nome,sobreNome)
           console.log(typeof senha, typeof confirmSenha)
        })      
    }

    }
const valida = new ValidacaoForm;


