<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        I'm a block
    </div>
</template>

<script>
export default{
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    // we are creating a hook to fire when the component is mounted
    mounted(){
        //function fires depending on delay number
        setTimeout(() => {
            this.showBlock = true, 
            this.startTimer()
        }, this.delay)
    },
    // this hook fires when the component is updated
    updated(){},
    // this hook fires when the component is unmounted
    unmounted(){

    },
    methods: {
        startTimer (){
            // every 10 miliseconds updates timer
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer(){
            clearInterval(this.timer)
            this.$emit('gameEnd', this.reactionTime)
        }
    }
}
</script>

<style>
.block {
    width: 400px;
    background: #639;
    color: antiquewhite;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>