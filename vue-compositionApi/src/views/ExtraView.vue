<template>
    <div class="extra">
        <h1>This is an extra page</h1>
        <PostList v-if="showPosts" :posts="posts"/>
        <!-- With this button we change show posts to false/tru toggling our lifecycle hook on Single.Post.vue-->
        <button @click="(showPosts =!showPosts)">toggle posts</button>
    </div>
</template>

<script>
import { ref} from 'vue'
import PostList from '../components/PostList.vue'

export default {
    components: { PostList },
    setup() {
        const posts = ref([
            {name: 'Camila', age: 23, id: 1, description: `Everyone knows about it`},
            {name: 'Loretta', age: 28, id: 2, description: `A seven nation army couldn't hold me back`},
            {name: 'Markus', age: 22, id: 3, description: `And the feeling coming from my bones says, Find a home`}
        ])



        const showPosts = ref(true)
        return {posts, showPosts}
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