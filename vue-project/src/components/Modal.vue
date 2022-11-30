<template>
    <!-- @click.shift informs that only while pressing outside of the modal it will close -->
    <div class="backdrop" @click.self="closeModal">
        <!-- we can send several classes, the second one acts as a boolean -->
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <h1>This is a modal</h1>
            <p>{{ header }}</p>
            <p>{{ text }}</p>
        </div>
        <div class="modal" :class="{ sale: theme === 'sale' }">
            <!-- we are sending the app.vue slots -->
            <slot></slot>
            <div class="hyperlink">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
// we are accepting the prop sent from App.vue
export default {
    props: ['header', 'text', 'theme'],
    methods: {
        // this is a custom event, fires here and affects parent component (app.js)
        closeModal() {
            //$emit allows us to emit an event, in this case we call "close" to our event
            this.$emit('close')
        }
    } 
}
</script>

<!-- if we used scoped in a style we limit the use of it to this component -->
<style scoped>
.modal {
    width: 400px;
    padding: auto;
    margin: 100px auto;
    background: red;
    border-radius: 20px;
    text-align: center;
}

/* we can also limit it by making sure it only affects the desired class/ref as done in .modal h1 */
.modal h1 {
    color: white;
    border: none;
    padding: 0;
}

.backdrop {
    top: 0;
    position: fixed;
    background: black;
    width: 100%;
    height: 100%
}

/* modal div colors will change depending of Theme props, if = to sale this will activate it */
.modal.sale {
    background-color: crimson;
    color: aliceblue
}

.modal.sale.h1 {
    color: aliceblue
}
</style>