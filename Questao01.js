/* 
Questão 01 - Crie um array com 5 números e usando o método forEach(), crie 
um algoritmo para adicionar 1 a cada elemento deste array?
*/

let array = [1,2,3,4,5];

array.forEach(function(num, indice, arr){
// num é o valor dos nossos elementos
// indice é a posição dos elementos
// arr é o nosso proprio array
    arr[indice] = num + 1;
})




/* let array = [1,2,3,4,5];

array.forEach(function(elemento){
    elemento += 1 ou console.log(elemento +1);
});*/