<template>
    <div class="backdrop" @click.self="close">
        <div class="modal">
            <h3>{{ text }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        text: String,
        description: String
    })

    const emit = defineEmits(['close'])

    const close = ()=>{
        emit('close')
    }

</script>

<style lang="scss" scoped>
    .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .modal {
        background: #fff;
        padding: 24px;
        border-radius: 16px;
        border: 4px solid #00ff00;
        width: 40%;
        min-height: 30vh;
        box-shadow: #fff 0 0 5px;

        h3, p {
            color: #009900;
            font-size: 1.2rem;
            margin: 8px auto;
        }
    }
}
</style>