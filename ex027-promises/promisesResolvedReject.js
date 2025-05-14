function exibaAlgo(algo,tempo){
    return new Promise((resolve,recuse)=> {
        setTimeout(()=> {
        typeof algo !== 'string' ? recuse(TypeError ('tipo de dado invalido')): resolve(algo)
        }, tempo)
    })
}

function problemaResolve() {
    const problemaResolvido = true;

    if (problemaResolvido) {
      return Promise.resolve('problema resolvido');
    }  
    else {
        return exibaAlgo('resolvendo problema', 5000)
    } 

}

problemaResolve()
.then(resolvendo => console.log(resolvendo))

function errosDeProblemas(){
    const problemaResolvido = true;

    if (problemaResolvido) {
      return Promise.reject('error ao resolver');
    }  
    else {
        return exibaAlgo('resolvendo problema', 5000)
    } 

}
errosDeProblemas()
.catch(resolvendo => console.log(resolvendo))