<template>
  <div>
    <h1> {{ about }} </h1>

    <div>
      <input type="text" ref="name">
      <button @click="handleClick">Click here</button>
    </div>
    <div>
      <ul v-for=" cover in avrilCovers">
        <a :href="cover.url"><img :src="cover.image" :alt="cover.name"></a>
      </ul>
    </div>
    <div>
      <p>There is a modal here</p>
      <button @click="toggleModal">Open Modal</button>
    </div>
  </div>
    <!-- if true we will show what's written in Modal.vue -->
    <!-- we have also changed divs to teleport to activate the teleport fucntion on index.html -->
    <Teleport to=".modals" v-if="showModal">
      <!-- we can also send props to the link components -->
      <!-- those props can be taken from the data section inside export -->
      <!-- theme prop is now a boolean, this will change things on modal.vue depending on if true or false -->
      <!-- @close fires method close from Modal.vue -->
      <Modal :header='header' text="some text" :theme='theme' @close="toggleModal">
        <!-- we can also send teamplates like this (called slots) -->
        <h1>This is a Slot!</h1>
        <p>look at me I'm a Slot!</p>
        <!-- we can name slots using teamplates -->
        <template v-slot:links>
          <a href="https://www.youtube.com/watch?v=mOYZaiDZ7BM">click here for more music</a> <br>
          <a href="https://www.youtube.com/watch?v=LBQ2305fLeA">or here for even more music</a>
        </template>
      </Modal>
    </Teleport>
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
        { url: 'https://www.youtube.com/watch?v=Bg59q4puhmg', image: "../src/assets/images/av1.jpg", name: "girlfriend" },
        { url: 'https://www.youtube.com/watch?v=5NPBIwQyPWE', image: "../src/assets/images/av2.jpg", name: "complicated" },
      ],
      header: "This is a header",
      theme: "sale",
      showModal: false
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
    },

    // we use it to toggle on and of modal
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>