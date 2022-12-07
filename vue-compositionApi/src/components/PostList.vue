<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post"/>
        </div>
    </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
    props: ["posts"],
    components: {SinglePost},
    //if we want to use it in a setup function we have to pass it
    setup(posts) {
        console.log(posts);
    },
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