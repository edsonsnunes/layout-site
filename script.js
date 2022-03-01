function carregar(){
    var data = document.getElementById('datatxt')
    console.log(data)
    dataAtual = new Date()
    dia = dataAtual.getDay()-1
    // meses = ["janeiro", "Fevereiro", "Março", "Abril", "Maio", "junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    mes = dataAtual.getMonth()
    ano = dataAtual.getFullYear()
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
    
    if(dia < 10){
        data.textContent =`0${dia} ${mesTexto} ${ano}`
    }else{
        data.textContent = `${dia} ${mes} ${ano} `
    }

    
    
    
}