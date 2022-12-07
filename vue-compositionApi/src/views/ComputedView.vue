<template>
    <div class="computed">
        <h1>This is a computed page</h1>
    </div>

    <input type="text" v-model="search">
    <p>searching for {{ search }}</p>
    <div v-for="name in matchName" :key="name">
        <p>My name is {{ name }}</p>
    </div>
    <button @click="handleClick">Stop watch</button>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    setup() {
    const search = ref('')
    const names = ref(['alex', 'miranda', 'lorelei', 'yacint', 'ezequiel'])

    // watch and watch efect can be used in composition API
    //first argument is what you want to watch, second is the function to fire
    const watchObject = watch(search, () => {
        console.log(`watch function: ${search.value} changed`)
    })

    //watch effect fires the moment the setup function runs, watch doesn't
    const watchEffectObject = watchEffect(() => {
        //we pass the thing we want to watch insid the function
        console.log(`watch effect function: `, search.value)
    })
    
    //we use match names to filter through array and put it on v-for
    const matchName = computed(() => {
        //we cannot use filter directly as it is a ref, must use value first
         return names.value.filter((name) => name.includes(search.value))
    })

    // to stop watch and watch effects we only have to invoke them a second time
    const handleClick = () => {
        watchObject(),
        watchEffectObject()

    }

    return { names, search, matchName, handleClick }
    }
}
</script>

<style>
@media (min-width: 1024px) {
    .computed {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>