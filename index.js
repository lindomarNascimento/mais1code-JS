
// exercicio 1
//  ajude o professor, ele digitara 3 notas , calcule a media e retorne 
//  se ele passou ou não de ano  , não enviar em console.log
// deixa BUNITO estiliza bastante. innerHTML e o input

// exercicio 2
// 1 = pedra
// 2 = papel
// 3 = tesoura
// sempreee asumiir que eu vou jogar tesoura
// if 
// else 
// quem ganhou

// console.log('wasdsasadas consoleeeeeee')
// document.write(`<div>asdsadsa</div>`)
// innerHTMl ou textContent

// mapas || mapeamento 
// DOM - Modelo de Objeto de Documentos 

var input = document.querySelector('.input')
var button = document.querySelector('.button')
var result = document.querySelector('.result')

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

button.addEventListener('click', function () {
  var number = Number(input.value) //1
  // i = i+1  == i+=1 == i++
  for (var i = 0; i < array.length; i++) {
    result.innerHTML +=
      `<li>${number}X ${array[i]} = ${number * array[i]}</li>`
  }
})

// index
// mapas
// for
// for of
// for in
// map
// reduce // 0  1  2  3  4  5  6  7  8  9



// loop       
// for (var i = 0; i <= 9; i = i + 1) {
//   console.log([i])
// }

// exercicio 3
// digitar um numero até 10 
// 3 = 1, 2

// 7 = 1, 2, 3, 4, 5, 6




