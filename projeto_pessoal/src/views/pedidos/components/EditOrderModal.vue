<template>
    <div class="backdrop" @click.self="close">
        <div class="modal">

        </div>
    </div>
</template>

<script setup lang="ts">

    const emit = defineEmits(['close'])

    const close = () => emit('close')
</script>

<style>
    .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background: #fff;
    color: #000;
    padding: 24px;
    border-radius: 16px;
    width: 400px;
}
</style>