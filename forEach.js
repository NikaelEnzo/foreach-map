// Sintaxe
// Array.forEach(callback(ElementoAtual [indice [array]])[thisArg])


const array2 = [1,2,3,4,5];

array2.forEach(function(elemento){
    console.log(elemento);
});


const StreetFighter = ["Ryu","Kem","Blanka","Vega","M. Bison"];

StreetFighter.forEach(function(elemento,index) {
    console.log("Index:"+ index,"Elemento:"+ elemento)
}); 


const array3 = [1,2,3,4,5];

array3.forEach(function(elemento, index, array, thisArg){
    console.log(`Index:${index}, Elemento:${elemento}, Array:${array}, thisArg:${thisArg}`)
})

/*
forEach pode ser uzado do para:

Atualização de posições e estados dos objetos
Detecção de colisões
Renderização de elementos na tela
Processamentos de eventos
gerenciamento de interações do usuario
Atualização de UI (Interface de usuario) e HUD (heads-Up Display)
*/