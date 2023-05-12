let computerNumber
let userNumbers =[]
let attempts = 0
let maxAttempt = 10

function init(){
    computerNumber = Math.floor(Math.random()*100+1)
    console.log(computerNumber)
}

function myGuess(guess){
    guess = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + guess)
    document.getElementById('guesses').innerHTML= userNumbers

    if(attempts < maxAttempt){
        if (guess > computerNumber){ 
            document.getElementById('textOutput').innerHTML=('Escolha um número menor' + '\nchances restantes ' + (maxAttempt-attempts))
            document.getElementById('inputBox').value= ''
        }else if(guess < computerNumber){
            document.getElementById('textOutput').innerHTML=('Escolha um número maior' + '\n chances restantes ' + (maxAttempt-attempts))
            document.getElementById('inputBox').value= ''
        }else{
            document.getElementById('textOutput').innerHTML=('Parabéns você acertou')
            let campo = document.getElementById('inputBox')
            campo.disabled=true
               
        }
        attempts+=1
        document.getElementById('attempts').innerHTML = attempts
    
    }else{
        document.getElementById('textOutput').innerHTML=('Você Perdeu! O número era ' + computerNumber)
        let campo = document.getElementById('inputBox')
            campo.disabled=true
    }
    }

    
