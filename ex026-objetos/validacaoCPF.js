// let cpf = '454.779.298-47'
// let cpfLimpo = cpf.replace(/\D+/g,'')
// cpfArray = Array.from(cpfLimpo)


// console.log(cpfArray)

function ValidacaoCPF(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpf.replace(/\D+/g,'')
        }
    })
}

ValidacaoCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    console.log(cpfParcial,digito1,digito2)
    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo

}

ValidacaoCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--;
        console.log(ac)
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

ValidacaoCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidacaoCPF('454.779.298-47')  

if(cpf.valida()){
    console.log('CPF válido')
}
else{
    console.log('CPF inválido')
}