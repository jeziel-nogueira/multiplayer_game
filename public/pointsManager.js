export default function pointsController(document){
    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId){
        state.playerId = playerId
    }
    function subscribe(observerFunction){
        state.observers.push(observerFunction)
    }
    function notifyAll(command){
        for (const observerFunction of state.observers){
            observerFunction(command)
        }
        
    }    
    
    
    function updatePoints(command){

        let rank_list = document.getElementById('rak_list')
        rank_list.innerHTML = "";

        let lista = command.rank
        console.log("Points")
        console.log(command)

        

        

        for (var prop in lista) {
            /* console.log(prop, ": ", lista[prop].points) */

            let li = document.createElement('li')
            li.textContent = prop + ": " + lista[prop].points
            rank_list.appendChild(li)
        }
    }
    
    return{ subscribe, registerPlayerId, updatePoints}
}