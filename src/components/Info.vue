<template>
    <div class="info_box">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .info_box{
        min-width: 50%;
        min-height: 20vh;
        background-color: #1a1a1ad1;
        border: 4px solid #fff;
        box-shadow: #ffffff87 0 0 10px;
        border-radius: 16px;
        margin: 16px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        gap: 16px;
        
    }
</style>