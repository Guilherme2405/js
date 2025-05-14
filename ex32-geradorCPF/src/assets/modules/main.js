
import geraCPF from './geradorCPF';

 class CriaCPF{
    rand(min = 100000000,max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) +min));
    }

 geradorCPF() {
    const cpfParcial = this.rand();
    const digito1 = geraCPF.criaDigito(cpfParcial);
    const digito2 = geraCPF.criaDigito(cpfParcial + digito1); 
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF
 }

 
}

document.querySelector('.main');
document.querySelector('.gerar').addEventListener('click', function(e){
    alert('CPF GERADO');
    (function(){
        const gera = new CriaCPF();
        console.log(gera.geradorCPF());
        const cpf = gera.geradorCPF();
        document.querySelector('.cpfGerado').innerHTML = `${formataCPF(cpf)}`;
    })();
});

function formataCPF(cpf){
    return (
        cpf.slice(0,3) + '.' +
        cpf.slice(3,6) + '.' +
        cpf.slice(6,9) + '-' +
        cpf.slice(9,11)
    )
}

