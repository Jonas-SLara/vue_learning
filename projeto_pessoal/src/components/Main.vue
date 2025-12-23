<template>
    <main>
        <slot></slot>
    </main>
</template>
<script setup lang="ts">

</script>
<style>
    main{
        display: flex;
        flex-direction: column;
        min-height: 80vh;
        background-color: rgb(0, 0, 0);
        background-image: url('/img/banner.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>