<template>
    <v-dialog 
        v-model="showMenu" 
        persistent
        class="dialog"
        max-width="400"
    >
        <v-card 
            :title="endgameTitle" 
            class="endgame-menu"
        >
            <v-card-text v-if="game.gameWinner === 'w'">Han ganado blancas</v-card-text>
            <v-card-text v-else-if="game.gameWinner === 'b'">Han ganado negras</v-card-text>
            <v-container>
                <v-tooltip 
                    v-slot:activator="{ props }"
                    text="Seguir observando el tablero"
                >
                    <v-btn @click="toggleView()" v-bind="props">Observar</v-btn>
                </v-tooltip>
            </v-container>
            <v-btn @click="resetGame()" theme="light">Nueva partida</v-btn>
        </v-card>
    </v-dialog>
    <v-btn v-if="!showMenu" @click="toggleView()" variant="tonal">Volver al menú final</v-btn>
</template>
<script setup>
    import { ref, computed } from 'vue'
    import { useGameStore } from './../stores/game.js'

    const game = useGameStore()
    const endgameTitle = computed(() => {
        return game.chess.isDraw() ? 'Tablas' : 'Jaque Mate'
    })
    // Copiar el historial de la partida en el portapapeles
    // https://lichess.org/paste
    /*
    const copyHistory = async () => {
        const gameHistory = game.chess.history().join(' ')
        await navigator.clipboard.writeText(gameHistory)
    }
    */
    const showMenu = ref(true) 
    const toggleView = () => {
        showMenu.value = !showMenu.value
    }
    const resetGame = () => {
        game.inGame = false
        game.finishedGame = false
        game.gameWinner = null
        game.selectedCell = null
        game.targetCell = null
        game.chess.reset()
    }
</script>
<style scoped>
    .endgame-menu{
        text-align: center;
    }
</style>
