/* 
Questão 07 – Crie um algoritmo usando o método map() para calcular o 
quadrado de cada número em um array?
*/

let array = [1,2,3,4,5];

let arrayNum = array.map(function(num){
      
    return num * num

})
console.log(arrayNum)