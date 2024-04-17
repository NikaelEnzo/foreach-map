/* 
Questão 03 – Crie um algoritmo usando o método forEach() para encontrar o 
maior número em um array de números?
*/

let array = [1,2,3,4,50];

let x = 0

array.forEach(function(num){
    if (num > x){
        x = num
    }
})

console.log(x)