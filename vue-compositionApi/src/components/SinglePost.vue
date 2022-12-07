<template>
    <div class="SinglePost">
        <h3>{{ post.name  }}</h3>
        <p>{{ snippet }}</p>
        <!-- this button will toggle onUpdated function and change description of post-->
        <button @click="handleClick"> Update</button>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
    props: [ "post" ],
    setup (props) {
        //using the computed feature we are selecting only the first 100 characters of post.description
        const snippet = computed(() => {
            //props.object is needed to access it inside computed
            return props.post.description.substring(0,40) + '...'
        })

        
        const handleClick = () => {
            console.log('working', props.post.description)
            props.post.description = 'this is a new description'
        }
        //We can also insert lifecycle hooks
        onMounted(() => {console.log(`component mounted`)})
        onUnmounted(() => {console.log(`component unmounted`)})
        onUpdated(() => {console.log(`component updated`)})
    return { snippet, handleClick }
    }
}
</script>

<style>
@media (min-width: 1024px) {
    .extra {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>