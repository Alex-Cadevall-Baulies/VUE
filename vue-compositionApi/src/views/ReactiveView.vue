<template>
  <div class="reactive">
    <h1>This is a reactive page</h1>
  

  <div>
    <p>My name is {{ information.name }} my age is {{ information.age}}</p>
    <button @click="updateValues">Update</button>
  </div>
</div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const information = reactive({name: 'Miranda', age: 30})

    //reactive does not accept primitive values such as this one
    const primitiveValue = reactive('This is primitive')
    //we would be able to see it but not update it

    const updateValues = () => {
      //with reactive we do not have to use object.value
      information.age = 24
    }
    return {information, updateValues}
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .reactive {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
