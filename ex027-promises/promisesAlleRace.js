function exibaAlgo(algo,tempo){
    return new Promise((resolve,recuse)=> {
        setTimeout(()=> {
            typeof algo !== 'string' ? recuse(TypeError ('tipo de dado invalido')):
            resolve(algo)
        }, tempo)
    })
}

let cont = 0;
const arr = [
    exibaAlgo(`chamados promisses ${cont++}`,7000),
    exibaAlgo(`chamados promisses ${cont++}`,5000),
    exibaAlgo(`chamados promisses ${cont++}`,3000),
    exibaAlgo(`chamados promisses ${cont++}`,1000)
]

Promise.all(arr)
.then(resposta => console.log(resposta))

Promise.race(arr)
.then(resposta => console.log(resposta))
.catch(resposta => console.log(resposta))