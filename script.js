function carregar(){
    var data = document.querySelectorAll('.datatxt')
    var diaAtual = document.getElementById('diatxt')
    dataAtual = new Date()
    diahoje = dataAtual.getDay()
    dia = dataAtual.getDate()
    // meses = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    mes = dataAtual.getMonth()
    ano = dataAtual.getFullYear()
    data.forEach(element => {
        element.textContent;
      });
    switch (mes){
        case 0:
            mesTexto = "Janeiro"
            break
        case 1:
            mesTexto = "Fevereiro"
            break
        case 2:
            mesTexto = "Março"
            break
        case 3:
            mesTexto = "Abril"
            break
        case 4:
            mesTexto = "Maio"
            break
        case 5:
            mesTexto =  "junho"
            break
        case 6:
            mesTexto = "Julho"
            break
        case 7:
            mesTexto = "Agosto"
            break
        case 8:
            mesTexto = "Setembro"
            break
        case 9:
            mesTexto = "Outubro"
            break
        case 10:
            mesTexto = "Novembro"
            break
        case 11:
            mesTexto = "Dezembro"
            break
    }
    switch(diahoje){
        case 0:
            diaSemana = "Domingo"
            break
        case 1:
            diaSemana = "Segunda-feira"
            break
        case 2:
            diaSemana = "Terça-feira"
            break
        case 3:
            diaSemana = "Quarta-feira"
            break
        case 4:
            diaSemana = "Quinta-feira"
            break
        case 5:
            diaSemana = "Sexta-feira"
            break
        case 6:
            diaSemana = "Sábado"
            break

    }
    if(dia < 10){
        data.forEach(element => {
            element.textContent = `0${dia} ${mesTexto} ${ano}`;
          });
    }else{
        data.textContent = `${dia} ${mesTexto} ${ano} `
    }

    diaAtual.innerHTML = `${diaSemana}`
    
    
}