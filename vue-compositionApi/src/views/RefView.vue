<template>
  <div class="welcome">
    <h1>This is a ref page</h1>
    <h1>|</h1>
    <div>
      <!-- ref p can be found on setup() function-->
      <p ref="n">My name is {{ name }}.</p>
      <p ref="a">My age is {{age}}.</p>
    </div>
    <!-- we can access functions inside functions if returned-->
    <button @click="handleClick">click here</button>

    <div>
      <p>{{ test }}</p>
    </div>
    <button @click="changetest">click here</button>
  </div>
  <!--We can also change refs in this manner-->
  <input type="text" v-model="test">
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'welcome',
  setup() {
    let name = 'Miranda'
    let age = 30

    const n = ref(null)
    const a = ref(null)

    const handleClick = () => {
      console.log(n, n.value)
      console.log(a, a.value)
      // we can add classes to values
      n.value.classList.add('test')
      //we can also replace the original text
      a.value.textContent = 24
    }

    //If values are not inside data we cannot change them unless we use refs
    // By using ref we turn them into reactive values
    const test = ref('This is a test')

    const changetest = () => {
      // to change a ref we must use object.value
      test.value = 'Succesful test'
    }

    // as we are returning them we can use these objects directly on teamplate
    return {name, age, handleClick, n, a, test, changetest}
  },
  created(){

  }
}
</script>

<style>
@media (min-width: 1024px) {
  .welcome {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
