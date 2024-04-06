export default function pointsController(document) {
    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId) {
        state.playerId = playerId
    }
    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    function sortRank(rank) {
        // Extrair os pares chave-valor do objeto para um array de objetos
        const rankArray = Object.entries(rank).map(([key, value]) => ({ key, value }));

        // Implementar o Bubble Sort para ordenar o array de objetos com base nos pontos
        const len = rankArray.length;
        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < len - 1; i++) {
                if (rankArray[i].value.points < rankArray[i + 1].value.points) {
                    // Troca os elementos
                    let temp = rankArray[i];
                    rankArray[i] = rankArray[i + 1];
                    rankArray[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        // Reconstruir o objeto ordenado
        const sortedRank = {};
        for (const { key, value } of rankArray) {
            sortedRank[key] = value;
        }

        return sortedRank;
    }

    function updatePoints(command) {

        let rank_list = document.getElementById('rank_list')
        let lista = command.rank
        lista = sortRank(lista)

        rank_list.innerHTML = "";
        let rank = 1
        for (var prop in lista) {
            let li = document.createElement('li')
            li.textContent = prop + ": " + lista[prop].points
            if(rank === 1){
                li.classList.add("f_place");
                rank++
            }
            if(rank === 2){
                li.classList.add("s_place");
                rank++
            }
            if(rank === 3){
                li.classList.add("t_place");
                rank++
            }
            rank_list.appendChild(li)
        }
    }

    return { subscribe, registerPlayerId, updatePoints }
}