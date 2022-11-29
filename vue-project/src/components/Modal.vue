<template>
    <div class="backdrop">
        <div class="modal">
            <h1>This is a modal</h1>
            <p>{{ header }}</p>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
// we are accepting the prop sent from App.vue
export default {
    props: ['header', 'text']
}
</script>

<!-- if we used scoped in a style we limit the use of it to this component -->
<!-- we can also limit it by making sure it only affects the desired class/ref as done in .modal h1 -->
<style scoped>
    .modal {
        width: 400px;
        padding: auto;
        margin: 100px auto;
        background: red;
        border-radius: 20px;
        text-align: center;
    }
    .modal h1 {
        color: white;
        border: none;
        padding: 0;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: black (0,0,0,0.5);
        width: 100%;
        height: 100%
    }
</style>