<template>
    <button 
        v-on:click="$emit('active')"
        :class="{active: isactive}"
    >
        {{ text }}
    </button>
</template>

<style scoped>
    button{
        border: none;
        min-width: 200px;
        padding: 4px;
        border-radius: 8px;
        border: solid 2px #ff5521;
        background-color: black;
        padding: 8px;
        font-size: 1.1rem;
        color: #ffffff;
        font-weight: 700;
    } 

    .active{
        background-color: #0000008f;
    }

    button:hover{
        color: #ff5521;
    }
</style>

<script setup lang="ts">
    const props = defineProps({
        text: String,
        isactive: Boolean
    })
</script>