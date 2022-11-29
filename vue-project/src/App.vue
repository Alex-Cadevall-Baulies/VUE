<template>
  <!-- we can also send props to the link components -->
  <!-- those props can be taken from the data section inside export -->
  <Modal :header='header' text="some text"/>
  <br>
  <h1> {{about}} </h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click here</button>
  <br>
  <ul v-for=" cover in avrilCovers">
    <a :href="cover.url"><img :src="cover.image" :alt="cover.name"></a>
    <br>
  </ul>
</template>

<script>
//we add the child components in this way
import Modal from './components/Modal.vue'

export default {
  //I register it inside
  components: { Modal },
  data() {
      return {
          about: "Vue JS 3 tutorial from the net ninja for full tutorial",
          avrilCovers: [
              {url: 'https://www.youtube.com/watch?v=Bg59q4puhmg', image: "../src/assets/images/av1.jpg", name: "girlfriend"},
              {url: 'https://www.youtube.com/watch?v=5NPBIwQyPWE', image: "../src/assets/images/av2.jpg", name: "complicated"},
          ],
          header: "This is a header",
      }
  },

  methods: {
    handleClick() {
      //We can access the refs in the following way:
      console.log(this.$refs.name)
      //we can add a class to the element
      this.$refs.name.classList.add('active')
      //other examples
      this.$refs.name.focus()
    }
  }
}
</script>