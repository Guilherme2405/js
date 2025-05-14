function mostraHora() {
   let diahora = new Date()
   let hora = diahora.getHours();
   let minutos = diahora.getMinutes();
   let segundos = diahora.getSeconds();
   const horas = `${hora}:${minutos}:${segundos}`
   
   console.log(horas)

}

setInterval (mostraHora, 1000)