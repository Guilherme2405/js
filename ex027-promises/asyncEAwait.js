function exibaAlgo(algo,tempo){
    return new Promise((resolve,recuse)=> {
        setTimeout(()=> {
        typeof algo !== 'string' ? recuse(TypeError ('tipo de dado invalido')): resolve(algo)
        }, tempo)
    })
}

async function assincrona() {
   try {
    const promessa1 = await exibaAlgo('promessa 1', 5000)
    console.log(promessa1)
    const promessa2 = await exibaAlgo('promessa 2', 1000)
    console.log(promessa2)
    const promessa3 = await exibaAlgo(3, 3000)
    console.log(promessa3)
   } catch(e) {
    console.log(e)
   }
    
}

assincrona()
.then(resposta =>  {return console.log(resposta)})