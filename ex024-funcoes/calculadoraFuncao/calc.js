function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),


        //metodos
        incia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', function(e) {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            }.bind(this))
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0,-1)
        },

        realizaConta() {
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
        },


        cliqueBotoes() {
            //this == calculadora
            document.addEventListener('click', function(e) {
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
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

            }.bind(this)) // bind == vincula o this para a calculadora, sem usar .bind o evento usava this document


        },

        btnParaDisplay(valor){
            this.display.value += valor

        },




    }
};

const calculadora = criaCalculadora()
calculadora.incia()