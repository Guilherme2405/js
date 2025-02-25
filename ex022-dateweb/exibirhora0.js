function mostraHora() {
    let horas = new Date();

    let hora = diahora.getHours();
    let minutos = diahora.getMinutes();
    let segundos = diahora.getSeconds();
    
     return horas.toTimeString('00:00:00', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
        
    });
}

 const timer = setInterval(function () {
    console.log(mostraHora());
 }, 1000);