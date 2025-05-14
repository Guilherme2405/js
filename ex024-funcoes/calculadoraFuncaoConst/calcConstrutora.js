function Calculadora() {

    //argumentos
   this.display = document.querySelector('.display');
   this.btn = document.querySelector('.btn-num');



    //metodos

    this.inicia = function (){
        this.clicaBotoes();
        this.pressionaEnter();
        
    };

        this.pressionaEnter = function(){
        this.display.addEventListener('keyup', function(e) {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        }.bind(this))
    };

    this.realizaConta = function () {
        let conta = this.display.value;
        try {
            conta = eval(conta)
            if (!conta) {
                alert('conta invalida')
                return;
            }
            this.display.value = String(conta);
        } catch(e) {
            alert('conta invalida')
            return
        }
    };

    this.clicaBotoes = function(){
        document.addEventListener('click', function(e){
            const el = e.target
            if(el.classList.contains('btn-num')) {
                this.exibirDisplay(el.innerText)
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm()
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta()
            }

        }.bind(this));
    };

    this.exibirDisplay = function(valor) {
        this.display.value += valor
        this.display.focus()
    };

    this.clearDisplay = function() {
        this.display.value = '';
    };

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0,-1)
    };

    this.realizaConta = function() {
        let conta = this.display.value;
        try {
            conta = eval(conta)
            if (!conta) {
                alert('conta invalida')
                return;
            }
            this.display.value = String(conta);
        } catch(e) {
            alert('conta invalida')
            return
        }
    }


}

const calc = new Calculadora();
calc.inicia();
