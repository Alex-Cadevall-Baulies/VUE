<template>
  <h1>Hello!</h1>
  <p>push option to see ref, reactive or computed examples</p>
<div class="wrapper">
  <RouterLink :to="{ name: 'ref'}"> Ref View</RouterLink>
  <RouterLink :to="{ name: 'reactive'}"> Reactive View</RouterLink>
  <RouterLink :to="{ name: 'computed'}"> Computed View</RouterLink>
  <RouterLink :to="{ name: 'extra'}"> Extra View</RouterLink>
</div>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
