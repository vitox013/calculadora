var resultado = document.getElementById('resultado')
    operacao = document.querySelectorAll('.operacoes div')
    numero = document.querySelectorAll('.numbers div')
    igual = document.getElementById('igual')
    clear = document.getElementById('clear')
    resultApareceu = false


//A PARTIR DO TECLADO FISICO
document.addEventListener('keydown', function(event){
    //DIGITANDO NUMEROS
    const keyPressed = event.key
    
    if(keyPressed <= 9)
        if(resultApareceu === false){
            resultado.innerHTML += keyPressed
        }
        else if(resultApareceu === true && ultimoChar === '+' || resultApareceu && ultimoChar === "-"|| resultApareceu && ultimoChar === "×"|| resultApareceu && ultimoChar === "÷"){
            resultApareceu = false
            resultado.innerHTML += keyPressed
        }
        else{
            resultApareceu = false
            resultado.innerHTML = ""
            resultado.innerHTML += keyPressed
        }

    if(keyPressed == 'Backspace')
        resultado.innerHTML = ""

    var stringAtual = resultado.innerHTML
    var ultimoChar = stringAtual[stringAtual.length - 1]

    //VERIFICANDO SE O PRIMEIRO DIGITO É UM OPERADOR / EVITANDO QUE SEJA COLOCADO DOIS OPERADORES AO LADO DO OUTRO

    //DIGITANDO OS OPERADORES
    if(ultimoChar === '+' || ultimoChar === "-"||ultimoChar === "×"|| ultimoChar === "÷"){
        var novaString = stringAtual.substring(0, stringAtual.length - 1)
        resultado.innerHTML = novaString
    }
    else if((keyPressed == '-' || keyPressed == '*' || keyPressed == '/' || keyPressed == '*') && stringAtual == 0){
        window.alert('Insira um número antes')
    }
    else {
        if(keyPressed == '*')
            resultado.innerHTML += '×'
        if(keyPressed == '/')
            resultado.innerHTML += '÷'
        if(keyPressed == '-')
            resultado.innerHTML += '-'
        if(keyPressed == '+')
            resultado.innerHTML += '+'
        resultApareceu = false
    }
    //=============MOSTRAR RESULTADO AO TECLAR ENTER=============
    if(keyPressed == 'Enter'){
        var stringResultado = resultado.innerHTML
    
        var numeros = stringResultado.split(/\-|\+|\×|\÷/g)
        var operadores = stringResultado.replace(/[0-9]|\./g, "").split("")
    
        var dividir = operadores.indexOf("÷")
        while(dividir != -1){
            numeros.splice(dividir, 2, numeros[dividir] / numeros[dividir + 1])
            operadores.splice(dividir, 1)
            dividir = operadores.indexOf("÷")
        }
    
        var multiplicar = operadores.indexOf("×")
        while(multiplicar != -1){
            numeros.splice(multiplicar, 2, numeros[multiplicar] * numeros[multiplicar + 1])
            operadores.splice(multiplicar, 1)
            multiplicar = operadores.indexOf("×")
        }
    
        var subtrair = operadores.indexOf("-")
        while(subtrair != -1){
            numeros.splice(subtrair, 2, numeros[subtrair] - numeros[subtrair + 1])
            operadores.splice(subtrair, 1)
            subtrair = operadores.indexOf("-")
        }
    
        var somar = operadores.indexOf("+")
        while(somar != -1){
            numeros.splice(somar, 2, parseFloat(numeros[somar]) + parseFloat(numeros[somar + 1]))
            operadores.splice(somar, 1)
            somar = operadores.indexOf("+")
        }
    
        resultado.innerHTML = numeros[0]
        resultApareceu = true
    }
})
        

//A PARTIR DO TECLADO VIRTUAL
numero.forEach(num => {
    
    num.addEventListener('click', function(num){
        var stringAtual = resultado.innerHTML;
        var ultimoChar = stringAtual[stringAtual.length - 1]
        
        if(resultApareceu === false){
            resultado.innerHTML += num.target.innerHTML
        }
        else if(resultApareceu === true && ultimoChar === '+' || resultApareceu && ultimoChar === "-"|| resultApareceu && ultimoChar === "×"|| resultApareceu && ultimoChar === "÷"){
            resultApareceu = false
            resultado.innerHTML += num.target.innerHTML
        }
        else{
            resultApareceu = false
            resultado.innerHTML = ""
            resultado.innerHTML += num.target.innerHTML
        }
    })
    
});

operacao.forEach(oper => {
    oper.addEventListener('click', function(num){

        var stringAtual = resultado.innerHTML;
        var ultimoChar = stringAtual[stringAtual.length - 1]
        
        if(ultimoChar === '+' || ultimoChar === "-"||ultimoChar === "×"|| ultimoChar === "÷"){
            var novaString = stringAtual.substring(0, stringAtual.length - 1) + num.target.innerHTML
            resultado.innerHTML = novaString
        }
        else if(stringAtual == 0){
            window.alert('Insira um número antes')
        }
        else {
            resultado.innerHTML += num.target.innerHTML
        }
    })
    
})
    
igual.addEventListener('click', function(){
    var stringResultado = resultado.innerHTML

    var numeros = stringResultado.split(/\-|\+|\×|\÷/g)
    var operadores = stringResultado.replace(/[0-9]|\./g, "").split("")

    var dividir = operadores.indexOf("÷")
    while(dividir != -1){
        numeros.splice(dividir, 2, numeros[dividir] / numeros[dividir + 1])
        operadores.splice(dividir, 1)
        dividir = operadores.indexOf("÷")
    }

    var multiplicar = operadores.indexOf("×")
    while(multiplicar != -1){
        numeros.splice(multiplicar, 2, numeros[multiplicar] * numeros[multiplicar + 1])
        operadores.splice(multiplicar, 1)
        multiplicar = operadores.indexOf("×")
    }

    var subtrair = operadores.indexOf("-")
    while(subtrair != -1){
        numeros.splice(subtrair, 2, numeros[subtrair] - numeros[subtrair + 1])
        operadores.splice(subtrair, 1)
        subtrair = operadores.indexOf("-")
    }

    var somar = operadores.indexOf("+")
    while(somar != -1){
        numeros.splice(somar, 2, parseFloat(numeros[somar]) + parseFloat(numeros[somar + 1]))
        operadores.splice(somar, 1)
        somar = operadores.indexOf("+")
    }

    resultado.innerHTML = numeros[0]
    resultApareceu = true
})

clear.addEventListener('click', function(){
    resultado.innerHTML = ""
})



