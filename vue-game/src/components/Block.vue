<template>
    <div class="block">
        I'm a block
    </div>
</template>

<script>
export default{
    props: ['delay']
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