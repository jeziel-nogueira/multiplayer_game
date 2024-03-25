import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import { Server, Socket } from 'socket.io'

const app = express()
const server = http.createServer(app) // recebe uma instancia do express
const sockets = new Server(server) // recebe uma instancia do node

app.use(express.static('public'))

const game = createGame()
game.start()

game.subscribe((command) =>{
    sockets.emit(command.type, command)
})

sockets.on('connection', (socket) =>{
    const playerId = socket.id
    game.addPlayer({playerId: playerId})

    socket.emit('setup', game.state)

    socket.on('disconnect', () =>{
        game.removePlayer({playerId: playerId})
        console.log(`Player logaut id: ${playerId}`)
    })
    socket.on('movePlayer', (command) =>{
        command.playerId = playerId
        command.type = 'movePlayer'
        
        game.movePlayer(command)
    })
})

server.listen(3000, () =>{
    console.log('Server up and listening in port: 3000')
})