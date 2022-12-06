<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!--Vue equivalent and quicker solution to using href="/about"-->
        <RouterLink to="/">Home</RouterLink>
        <!--we can also data bind them, that allows us to keep the name but change the /direction-->
        <RouterLink :to="{ name: 'about'}">About</RouterLink>
        <RouterLink :to="{ name: 'jobs'}">Jobs</RouterLink>
      </nav>
    </div>
  </header>

  <button @click="redirect"> Redirect </button>
  <button @click="back"> Back </button>
  <button @click="forward"> Forward </button>
  <!--We are indicating where we want the route component-->
  <RouterView />
</template>

<script>
export default {
  methods: {
    redirect(){
      //we push the client to where do we want
      this.$router.push({name : 'home'})
    },
    back(){
      //not the same as $route, route is for navigation info, router is when we want to modify
      //.go allows tou to go forward or back as much as the number indicates
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(+1)
    },
  }
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
