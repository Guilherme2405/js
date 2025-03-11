// funções invocadas imediatamente

(function(idade,peso,altura)
{
    const sobrenome = 'cataneo'
    function crianome(nome) {
        return nome + ' ' + sobrenome  
    }

    function falanome() {

        console.log(crianome('guilherme'))
    }

    falanome()
    console.log('idade ', idade)
    console.log('peso ', peso)
    console.log('altura ', altura)

})(23,89,1.8); //e possivel usar paramentros

console.log('ola mundo');

// nada consegue acessar uma função imediata