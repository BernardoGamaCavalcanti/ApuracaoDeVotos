// 1) Uma cidade pretende apurar os votos de sua eleição. 
// Faça um programa para ler o número total de eleitores.
//  Em seguida o número de votos do candidato X, o número de votos 
//  do candidato Y, total de votos brancos e total de votos 
//  nulos (a soma desses quatro, deve ser igual ao total de eleitores). 
//  Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

let votosX = document.getElementById("VotosCandX")
let votosY = document.getElementById("VotosCandY")
let votosBranco = document.getElementById("VotosEmBranco")
let votosNulos = document.getElementById("VotosNulo")
let totalEleitores

let porcX, porcY, porcBranco, porcNulos

function Total() {

         totalEleitores = Number(votosX.value) + Number (votosY.value) + Number (votosBranco.value) + Number (votosNulos.value)
        
         alert(totalEleitores)

         
         porcX = (votosX.value / totalEleitores) * 100
         porcY = (votosY.value / totalEleitores) * 100
         porcBranco = (votosBranco.value / totalEleitores) * 100
         porcNulos = (votosNulos.value  / totalEleitores) * 100
         
         alert(`A porcentagem dos votos no candidato X foi de: ${porcX}%\n\nA porcentagem dos votos no candidato Y foi de: ${porcY}%\n\nA porcentagem dos votos em Branco foi de ${porcBranco}%\n\nA porcentagem dos votos nulos foi de: ${porcNulos}% `)

}

