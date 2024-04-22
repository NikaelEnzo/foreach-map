/* 
Questão 05 – Crie um algoritmo usando o método map() para criar um novo 
array com o dobro de cada número ímpar em um array original?
*/

let array = [1,2,3,4,5];

let arrayNum = array.map(function(num){
    if (num % 2 == 1){
      return num * 2
    } else { return array.splice(0,0) }
})
console.log(arrayNum)