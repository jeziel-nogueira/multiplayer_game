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
    
    function sortRank(rank){
        let sorted = false
        //while(!sorted){

            for (var playerA in rank) {
                
                for (var playerB in rank) {
                    if(rank[playerA].points < rank[playerB].points){

                        let temp = rank[playerA]

                        rank[playerA] = rank[playerB]
                        rank[playerA].points = rank[playerB].points
                        rank[playerB] = temp
                    }
                }
            }
       // }
        return rank
        
    }
    
    function updatePoints(command){

        let rank_list = document.getElementById('rank_list')
        rank_list.innerHTML = "";

        let lista = command.rank
        //lista = sortRank(lista)
        //const newLista = sortRank(lista)
        console.log("Len: ", lista.length)
        

        //lista = sortRank(lista)

        for (var prop in lista) {

            let li = document.createElement('li')
            li.textContent = prop + ": " + lista[prop].points
            rank_list.appendChild(li)
        }
    }
    
    return{ subscribe, registerPlayerId, updatePoints}
}