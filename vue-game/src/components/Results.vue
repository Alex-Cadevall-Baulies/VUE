<template>
    <p>Reaction time: {{score}}ms</p>
    <p class="rank">{{rank}}</p>
</template>

<script>
    export default {
        props: ['score'],
        data() {
            return {
            rank: null
            }
        },
        mounted() {
            if(this.score < 250) {
                this.rank = 'Supafast'
            } else if (this.score < 400) {
                this.rank = 'Not bad!'
            } else {
                this.rank = 'Too slow...'
            }
        },
        updated() {
            if(this.score < 250) {
                this.rank = 'Supafast'
            } else if (this.score < 400) {
                this.rank = 'Not bad!'
            } else {
                this.rank = 'Too slow...'
            }
        }
    }
</script>