alert('Seja bem vindo(a) ao jogo do número secreto')
let nome = prompt('Qual seu nome?')
let nome1 = nome.toLocaleLowerCase()
let maiornumero = 0
let numeroSecreto = parseInt(Math.random() * maiornumero + 1)

console.log(numeroSecreto)
let chute
let tentativas = 1
while(chute != numeroSecreto){
    chute = prompt(`Diginte um número de 1 a ${maiornumero}`) 
if(chute == numeroSecreto){  
    
    break 
         
} else{
    if(chute > maiornumero){
        alert('esse número não consta nos dados')
    };
    if(chute > numeroSecreto){
        alert(`o número secreto é menor do que ${chute}`)

    } else{
        alert(`O número secreto é maior do que ${chute}`)
        
    };
    tentativas++
}}
    let nomeespecial = 'jhonatan';
let nomeespecial1 = nomeespecial.toLocaleLowerCase();
let palavratentativa = tentativas > 1? 'tentantivas' : 'tentativa';
if(nome1 == nomeespecial1){
    alert(`Parabéns, ${nome1}! você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}. Abrance sua irma
        `)
} else{
alert(`Parabéns, ${nome1}! você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavratentativa}`)};