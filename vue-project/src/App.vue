<template>
  <h1> {{ props }}</h1>
  <ul v-for=" cover in avrilCovers">
      <a :href="cover.url"><img :src="cover.image" :alt="cover.name"></a>
  </ul>
</template>

<script>
export default {
  data() {
      return {
          props: "Vue JS 3 tutorial from the net ninja for full tutorial",
          avrilCovers: [
              {url: 'https://www.youtube.com/watch?v=Bg59q4puhmg', image: "../src/assets/images/av1.jpg", name: "girlfriend"},
              {url: 'https://www.youtube.com/watch?v=5NPBIwQyPWE', image: "../src/assets/images/av2.jpg", name: "complicated"},
          ]
      }
  },
}
</script>