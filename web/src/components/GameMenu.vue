<template>
    <h2>Nivel de dificultad seleccionado</h2>
    <h1> {{ game.gameDifficulty }}</h1>
    <v-form class="form">
        <v-select
            variant="outlined"
            v-model="game.gameDifficulty"
            label="Dificultad"
            :items="['Principiante', 'Aprendiz', 'Intermedio' , 'Avanzado', 'Experto', 'Gran Maestro']"
        ></v-select>
        <v-select
            variant="outlined"
            v-model="game.pieces"
            label="Piezas"
            :items="['Blancas', 'Negras']"
        ></v-select>
        <v-btn @click="game.inGame = true" theme="light">Iniciar partida</v-btn>
    </v-form>
</template>
<script setup>
    import { useGameStore } from './../stores/game.js'

    const game = useGameStore()
</script>
<style scoped>
    h1{
        font-size: clamp(50px, 10vw, 90px);
    }
    .form{
        width: 220px;
        display: flex;
        flex-direction: column;
        justify-items: center;
        margin-top: 50px;
    }
</style>