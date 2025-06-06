<template>
    <EndgameMenu v-if="game.finishedGame"/>
    <v-container class='board'>
        <v-container class='row'
            v-for="(row, x) in game.chess.board()" :key="x"
        >
            <Cell class='cell'
                v-for="(cell, y) in row" :key="y"
                :type="game.chess.board()[x][y]?.type"
                :color="game.chess.board()[x][y]?.color"
                :x="x"
                :y="y"
            />
        </v-container>
    </v-container>
</template>
<script setup>
    import Cell from './Cell.vue'
    import EndgameMenu from './EndgameMenu.vue'
    import { useGameStore } from './../stores/game.js'
    
    const game = useGameStore()
    game.initAI()
</script>
<style scoped>
    .board{
        display: grid;
        background-color: rgb(50, 50, 50);
        width: 600px;
        height: 600px;
        grid-template-rows: repeat(8, 1fr);
        padding: 0;
        border: 5px solid rgba(100, 0, 0, 0.2);
        user-select: none;
        .row{
            display: grid;
            height: 100%;
            grid-template-columns: repeat(8, 1fr);
            padding: 0;
        }
        .cell{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .row:nth-child(even) .cell:nth-child(odd),
        .row:nth-child(odd) .cell:nth-child(even){
            background-color: rgb(10, 10, 10);
        }
    }
    @media (max-width: 600px) {
    .board {
        width: 98vw;
        height: 98vw;
        margin: 0;
    }
}
</style>