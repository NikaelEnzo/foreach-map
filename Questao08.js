/* 
Questão 08 – Crie um algoritmo usando o método forEach() para calcular a 
média de todos os números em um array?  
*/

let array = [5,3,3,4,5];

let contArray = array.length;

let soma = 0;

let media = 0;

array.forEach(function(num){
    soma += num;
    media = soma / contArray;
})

console.log(soma)
console.log(media)
