<template>
    <div class="backdrop">
        <div class="modal">
            
            <h3>{{ text }}</h3>
            <p>{{ description }}</p>
            <button @click="calcelOrder(idSelected)">SIM</button>
            <button @click="close()">NÃO</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { OrderService } from '@/service/OrdersService'

    const props = defineProps({
        text: String,
        description: String,
        idSelected: Number
    })

    const emit = defineEmits(['close', 'update'])

    const close = ()=>{
        emit('close')
    }

    const calcelOrder = (idSelected: number)=>{
        OrderService.deletOrder(idSelected)
        emit('update')
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
        border: 4px solid #ff0000;
        width: 40%;
        min-height: 20vh;
        box-shadow: #fff 0 0 5px;

        h3, p {
            color: #000000;
            font-size: 1.2rem;
            margin: 16px auto;
        }

        button{
            float: right;
            background-color: #ff0202;
            margin: 0 16px;
            &:hover{
                background-color: #000;
            }
        }
    }
}
</style>