function teste() {
    console.log('teste Um')
}
class ControleRemoto {
    constructor(nome,volume) {
        this.nome = nome;
        this.volume = 0;
        teste();
    }
    //metodo instancia
    aumentarVolume(){
        this.volume  += 2;
    }

    //metodo estatico
    static trocapilha() {
        console.log('trocando pilhas')
    }
}

const lg = new ControleRemoto('sams')

/*
lg.aumentarVolume()
lg.aumentarVolume()
// lg.trocapilha() metodos static nao e possivel utilizar como argumento
ControleRemoto.trocapilha(); // metodo static e executado na classe e nao na instancia
console.log(lg)
*/
