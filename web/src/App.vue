<template>
  <v-app>
    <GameMenu v-if="!game.inGame"/>
    <Board v-if="game.inGame"/>
  </v-app>
</template>
<script setup>
  import GameMenu from './components/GameMenu.vue'
  import Board from './components/Board.vue'
  import { useGameStore } from './stores/game.js'

  const game = useGameStore()
</script>