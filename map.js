// Sintaxe
// Array.map(callback(elementoAtual [indice [array]])[thisArg])

//exenplo 1

let numeros = [1,2,3,4,5];

let numerosDobrados = numeros.map(function(elemento) {
    return elemento * 2;
});

console.log(numerosDobrados);

//exenplo 2

let personagens = ["batman","coringa","kratos","sonic"];

let nomesMaiusculos = personagens.map(function(nome) {
    return nome.toUpperCase();
});

console.log(nomesMaiusculos);

//exenplo XP

let niveisJogadores = [1,5,10,15,20];

function calcularExperienciaProximoNivel(nivel){
    const EXPERIENCIA_BASE = 100;
    const EXPERIENCIA_ADICIONAL_POR_NIVEL = 50;

    return EXPERIENCIA_BASE + nivel * EXPERIENCIA_ADICIONAL_POR_NIVEL;
}

let experienciaProximoNivel = niveisJogadores.map(function(nivel){
    return calcularExperienciaProximoNivel(nivel);
});

console.log(experienciaProximoNivel)

// Encadeamento de métodos map

let numerosArray = [1,2,3];
let resultado = numerosArray.map(function(numero) {
    return numero * 2;
}).map(function(numero) {
    return numero + 1;
});
console.log(resultado)
/*
map() é usado para fazer uma interação sobre todos os elementos de um array e crir um novo array com os resultados de um função de callback aplicada a cada elemento

map pode ser usado na:

Renderização de Graficos
Processamento de Dados no jogo
Gerenciamento de Estado
Sistemas de Particulas
Sistemas de Colisão
*/