import { defineStore } from 'pinia'
import { Chess } from 'chess.js'
import { askMove, initStockfish, sendPosition } from './../core/stockfish'

export const useGameStore = defineStore('game', {
    state: () => ({
        inGame: false,
        finishedGame: false,
        gameWinner: null,
        gameDifficulty: 'Avanzado',
        pieces: 'Blancas',
        chess: new Chess(),
        selectedCell: null,
        targetCell: null,
        lastAIMove: null
    }),
    getters: {
        fen: (state) => {
            return state.chess.fen()
        },
        board: (state) => {
            return state.chess.board()
        },
        turn: (state) => {
            return state.chess.turn()
        },
        gameHistory: (state) => {
            return state.chess.history()
        },
        isCheck: (state) => {
            return state.chess.inCheck()
        },
        isMate: (state) => {
            return state.chess.isCheckmate()
        },
    },
    actions: {
        initAI(){
            let difficulty
            switch(this.gameDifficulty){
                case 'Principiante': difficulty = 0; break
                case 'Aprendiz': difficulty = 4; break
                case 'Intermedio': difficulty = 8; break
                case 'Avanzado': difficulty = 12; break
                case 'Experto': difficulty = 16; break
                case 'Gran maestro': difficulty = 20; break
            }
            initStockfish(difficulty, (move) => {
                this.chess.move({
                    from: move.slice(0,2), 
                    to: move.slice(2,4), 
                    promotion: move.slice(4) || undefined
                })
                this.lastAIMove = move.slice(2,4)
                if(this.chess.isGameOver() && !this.finishedGame){
                    this.resetGame()
                }
            })
        },
        AIPlay(){
            sendPosition(this.chess.fen())
            askMove(800)
        },
        resetGame(){
            this.selectedCell = null
            this.targetCell = null
            this.lastAIMove =  null
            this.finishedGame = true
            this.gameWinner = this.pieces === 'Blancas' ? 'w' : 'b'
            console.log('Ha acabado la partida')
        }
    }
})