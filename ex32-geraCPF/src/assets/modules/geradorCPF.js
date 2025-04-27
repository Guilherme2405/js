
export class GeraCPF {
    constructor(){}

    static digitosCPF(min = 10000000,max = 999999999) {
        const digitos = Math.random() * (min + max) - min;
        return console.log(digitos)
    }
}