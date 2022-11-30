<template>
<h1>{{ title }}</h1>
<!--  disabled property makes button unclickable if game = true -->
<button @click="toggleGame" :disabled="game"> Play Game </button>
<Block v-if="game" :delay='delay'/>
</template>

<script>
//import Result from './components/Results.vue'
import Block from './components/Block.vue'

export default {
  components: { Block },
  data() {
    return{
    title: 'Vue Game',
    game: false,
    delay: null
    }
  },
  methods: {
    toggleGame() {
      //give me a time between 2000 and 7000 ms
      this.delay = 2000 + Math.random() * 5000 
      this.game = !this.game
      console.log(this.delay)
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