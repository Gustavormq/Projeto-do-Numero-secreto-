alert(' Boas Vindas ao jogo do número secreto!');
let numeroSecreto = 29;
console.log (numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 30');
//se chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('você descobriu o número secreto!');
} else {
    alert( 'Você errou!')
}