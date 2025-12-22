<template>
    <main>
        <slot></slot>
    </main>
</template>

<script>
    export default{
        name: 'main'
    }
</script>

<style scoped>
    main{
        min-height: 80vh;
        background-color: rgb(255, 200, 200);
        background-image: url('/img/banner.jpg');
        background-attachment: fixed;
        background-size: cover;
        background-repeat: no-repeat;
        background-blend-mode: multiply;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>