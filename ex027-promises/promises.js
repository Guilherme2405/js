function rand(min,max) {
    return Math.random() * (max - min) + min;
}

function exibaAlgo(algo,tempo) {
    return new Promise ((resolve,reject) => {
        if(typeof algo !== "number") reject('error valor string');
        setTimeout(() => {resolve(algo*algo)}, tempo)
    })
    
}

exibaAlgo(2+2,rand(4000,1000))
    .then((resposta) => {
        console.log(resposta)
        return exibaAlgo(4*4, rand(3000,1000))
    })
    .then((resposta) => {
        console.log(resposta)
        return exibaAlgo(15+30, rand(1000,7000))
    })
    .then((resposta)=>{
        console.log(resposta)
    })
    .catch(e => {console.log("error: ", e)
    })


