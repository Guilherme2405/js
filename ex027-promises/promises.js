function exibaAlgo(algo,tempo){
    return new Promise((resolve,recuse)=> {
        setTimeout(()=> {
            resolve(algo)
        }, tempo)
    })
}

exibaAlgo('primeira promessa', 7000)
.then(resposta =>{
    console.log(resposta)
    return exibaAlgo('segunda promessa', 3000) // para fazer o chamado de outra função
})
.then(resposta => {
    console.log(resposta)
    return exibaAlgo('terceira promessa', 1000)
})
.then(resposta => {
    console.log(resposta)
})