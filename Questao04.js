/* 
Questão 04 – Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array?
*/

let array = [1,2,3,4,50];

let x = 0

array.forEach(function(num){
   x += num
})

console.log(x)