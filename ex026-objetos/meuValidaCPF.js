
function ValidaCPF(cpf) {
    this.cpf = cpf;
}

ValidaCPF.prototype.modelaCPF = function() {
    const strCPF = this.cpf.replace(/\./g,'').replace(/\-/g,'');
    this.tiraDigito(strCPF);
};

ValidaCPF.prototype.tiraDigito = function(strCPF) {

    
    const numbercpf = strCPF.split('');
    const cpfSem2 = numbercpf.slice(0,-2)
    const num1 = this.contaArray(cpfSem2)
    const cpfsem2Str = (cpfSem2.toString(cpfSem2).replace(/,/g, ""))
    const num2 = this.contaArray((cpfSem2.toString(cpfSem2).replace(/,/g, "")) + num1)

    const validador = cpfsem2Str + num1 + num2

    validador == strCPF ? console.log('CPF valido') : console.log('CPF invalido')
}


ValidaCPF.prototype.contaArray = function(contaArray) {
    const cpfArray = Array.from(contaArray)
    let regressivo = cpfArray.length +1;
    const total = cpfArray.reduce(function(ac,valor){
    ac += (regressivo * Number(valor))
    regressivo--;
    return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito) 
}

const cpf1 = new ValidaCPF('454.779.298-47');
const cpf2 = new ValidaCPF('454.779.858.36');

cpf1.modelaCPF()
cpf2.modelaCPF()
