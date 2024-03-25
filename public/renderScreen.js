export default function renderScreen(screen, game, requestAnimationFrame, currenPlayerId){
    const context = screen.getContext('2d')
    const localPlayer = game.state.players[currenPlayerId]

    context.fillStyle = 'white'
    context.clearRect(0, 0, 10, 10)

    for (const playerId in game.state.players){
        const player = game.state.players[playerId]
        if(player === localPlayer){
            context.fillStyle = '#F0DB4F'
            context.fillRect(localPlayer.x, localPlayer.y, 1, 1)
        }else{
            context.fillStyle = 'black'
            context.fillRect(player.x, player.y, 1, 1)
        }
    }
    for(const fruitId in game.state.fruits){
        const fruit = game.state.fruits[fruitId]
        context.fillStyle = 'green'
        context.fillRect(fruit.x, fruit.y, 1, 1)
    }
    requestAnimationFrame(() =>{
        renderScreen(screen, game, requestAnimationFrame, currenPlayerId)
    })
}