let stockfish = null

export const initStockfish = (difficulty = 10, makeMoveCallback) => {
    stockfish = new Worker('./stockfish/stockfish.js')

    stockfish.onmessage = (event) => {
        const message = event.data
        if(message.startsWith('bestmove')){
            const move = message.split(' ')[1]
            makeMoveCallback(move)
        }
    }
    stockfish.postMessage('uci')
    stockfish.postMessage(`setoption name Skill Level value ${difficulty}`)
    stockfish.postMessage('isready')
}
export const sendPosition = (fen) => {
    stockfish.postMessage(`position fen ${fen}`)
}
export const askMove = (moveTime = 1000) => {
    stockfish.postMessage(`go movetime ${moveTime}`)
}