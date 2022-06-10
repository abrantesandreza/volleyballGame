//No jogo do dia 3 de junho da liga das Nações de Volley Feminino, o Brasil ganhou da República Dominicana 
//por 3x1, com o placar dos sets sendo (ver imagem).
//Crie uma função chamada winner que irá receber um objeto contendo os times e suas respectivas pontuações 
//por set, e no final retornar um objeto contendo o vencedor e o placar final.
//Ex do jogo do Brasil:
//processWinner({
//     playerOne: {name: "Brazil", points: [25, 16, 25, 22, 17]},
//     playerTwo: {name: "Dominican Republic", points: [9, 25, 18, 25, 15]}
//})
//Output:
//{winner: "Brazil", result: "3x2"}

function processWinner(gameResult) {

    const player1 = gameResult.playerOne.points
    const player2 = gameResult.playerTwo.points

    let placarPlayer1 = 0
    let placarPlayer2 = 0

    for (let i = 0; i < player1.length; i++) {
        if (player1[i] > player2[i]) {
            placarPlayer1++
        } else {
            placarPlayer2++
        } 
    }

    let winner = null
    
    if (placarPlayer1 > placarPlayer2) {
        winner = gameResult.playerOne.name
    } else {
        winner = gameResult.playerTwo.name
    }

    return {
        winner, 
        placar: placarPlayer1 + ' x ' + placarPlayer2
    }
}

console.log(processWinner({
     playerOne: {name: "Brazil", points: [25, 16, 25, 22, 17]},
     playerTwo: {name: "Dominican Republic", points: [9, 25, 18, 25, 15]}
}))