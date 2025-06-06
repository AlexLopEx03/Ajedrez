<template>
    <v-container
        class="cell"
        v-if="game.pieces === 'Blancas'"
        :class="{
            selected: game.selectedCell == coordsToAlgebraic(props.x, props.y),
            'ai-move': game.lastAIMove == coordsToAlgebraic(props.x, props.y)
        }"
        @click="handleCellClick()"
    >
        <img v-if="props.type == 'p' && color == 'b'" src='/pieces/bP.svg'/>
        <img v-else-if="props.type == 'r' && color == 'b'" src='/pieces/bR.svg'/>
        <img v-else-if="props.type == 'n' && color == 'b'" src='/pieces/bN.svg'/>
        <img v-else-if="props.type == 'b' && color == 'b'" src='/pieces/bB.svg'/>
        <img v-else-if="props.type == 'q' && color == 'b'" src='/pieces/bQ.svg'/>
        <img v-else-if="props.type == 'k' && color == 'b'" src='/pieces/bK.svg'/>
        <img v-else-if="props.type == 'p' && color == 'w'" src='/pieces/wP.svg'/>
        <img v-else-if="props.type == 'r' && color == 'w'" src='/pieces/wR.svg'/>
        <img v-else-if="props.type == 'n' && color == 'w'" src='/pieces/wN.svg'/>
        <img v-else-if="props.type == 'b' && color == 'w'" src='/pieces/wB.svg'/>
        <img v-else-if="props.type == 'q' && color == 'w'" src='/pieces/wQ.svg'/>
        <img v-else-if="props.type == 'k' && color == 'w'" src='/pieces/wK.svg'/>
    </v-container>
    <v-container
        v-else-if="game.pieces === 'Negras'"
        :class="{
            selected: game.selectedCell == coordsToAlgebraic(props.x, props.y),
            'ai-move': game.lastAIMove == coordsToAlgebraic(props.x, props.y)
        }"
        @click="handleCellClick()"
    >
        <img v-if="props.type == 'p' && color == 'w'" src='/pieces/bP.svg'/>
        <img v-else-if="props.type == 'r' && color == 'w'" src='/pieces/bR.svg'/>
        <img v-else-if="props.type == 'n' && color == 'w'" src='/pieces/bN.svg'/>
        <img v-else-if="props.type == 'b' && color == 'w'" src='/pieces/bB.svg'/>
        <img v-else-if="props.type == 'q' && color == 'w'" src='/pieces/bQ.svg'/>
        <img v-else-if="props.type == 'k' && color == 'w'" src='/pieces/bK.svg'/>
        <img v-else-if="props.type == 'p' && color == 'b'" src='/pieces/wP.svg'/>
        <img v-else-if="props.type == 'r' && color == 'b'" src='/pieces/wR.svg'/>
        <img v-else-if="props.type == 'n' && color == 'b'" src='/pieces/wN.svg'/>
        <img v-else-if="props.type == 'b' && color == 'b'" src='/pieces/wB.svg'/>
        <img v-else-if="props.type == 'q' && color == 'b'" src='/pieces/wQ.svg'/>
        <img v-else-if="props.type == 'k' && color == 'b'" src='/pieces/wK.svg'/>
    </v-container>
</template>
<script setup>
    import { useGameStore } from './../stores/game.js'
    import { coordsToAlgebraic } from './../core/position.js'

    const game = useGameStore()
    const props = defineProps({
        type: String,
        color: String,
        x: Number,
        y: Number
    })

    const handleCellClick = () => {
        if(!game.selectedCell && props.type && props.color == 'w' && game.turn == 'w'){
            game.selectedCell = coordsToAlgebraic(props.x, props.y)
        }else{
            if(game.selectedCell === coordsToAlgebraic(props.x, props.y)){
                game.selectedCell = null
            }else if(game.selectedCell && props.type && props.color == 'w'){
                game.selectedCell = coordsToAlgebraic(props.x, props.y)
            }else if(game.selectedCell && (!props.type || props.color == 'b')){
                game.targetCell = coordsToAlgebraic(props.x, props.y)
                let move
                if(props.type === undefined && game.selectedCell[1] === '7' && game.targetCell[1] === '8'){
                    move = game.chess.move({from: game.selectedCell, to: game.targetCell, promotion: 'q'})
                    if(game.chess.isGameOver() && !game.finishedGame){
                        game.resetGame()
                    }
                }else{
                    move = game.chess.move({from: game.selectedCell, to: game.targetCell})
                    if(game.chess.isGameOver() && !game.finishedGame){
                        game.resetGame()
                    }
                }
                if(move){
                    game.lastAIMove = null
                    game.AIPlay()
                }
                game.selectedCell = null
                game.targetCell = null
            }
        }
    }
</script>
<style scoped>
    .cell{
        padding: 10px;
    }
    .selected{
        background-color: rgba(255, 255, 0, 0.3) !important;
    }
    .ai-move{
        background-color: rgba(255, 0, 0, 0.3) !important;
    }
    @media (max-width: 600px) {
        .cell {
            padding: 5px;
        }
    }
</style>