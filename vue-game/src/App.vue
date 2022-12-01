<template>
<h1>{{ title }}</h1>
<!--  disabled property makes button unclickable if game = true -->
<button @click="toggleGame" :disabled="game"> Play Game </button>
<!--  we send delay data and receive reactionTime from gameEnd in Block.vue -->
<Block v-if="game" :delay='delay' @gameEnd="gameEnded"/>
<Results v-if="showResults" :score="score"/>
</template>

<script>
//import Result from './components/Results.vue'
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  components: { Block, Results },
  data() {
    return{
    title: 'Vue Game',
    game: false,
    delay: null, 
    score: null,
    showResults: false
    }
  },
  methods: {
    toggleGame() {
      //give me a time between 2000 and 7000 ms
      this.delay = 2000 + Math.random() * 5000 
      this.game = !this.game
      console.log(this.delay)
    },

    gameEnded(reactionTime) {
      //we send reaction time info to score
      this.score = reactionTime
      // we return game to false to reactivate button
      this.game = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  color: #639;
  margin-top: 60px;
}
</style>