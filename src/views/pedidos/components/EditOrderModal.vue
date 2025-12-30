<template>
    <div class="backdrop">
        <div class="modal">
            <button class="exit-modal" @click.self="close">X</button>
            <h3>Editar Pedido</h3>
            <form @submit.prevent="save">
                <div>
                    <label for="pao">Pao</label>
                    <input type="text" id="pao" v-model="form.pao">
                </div>

                <div>
                    <label for="carne">Carne</label>
                    <input id="carne" type="text" v-model="form.carne">
                </div>
                
                <div>
                    <label for="status">Status</label>
                    <select id="status" v-model="form.status">
                        <option 
                            v-for="status in OrderListStatus"
                            :key="status"
                            :value="status"
                        >
                            {{ status }}
                        </option>
                    </select>
                </div>
                <button type="submit">Alterar</button>

            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { OrderService } from '@/service/OrdersService';
import { OrderStatus, type Order } from '@/types/interfaces/Orders';
import { reactive, watch } from 'vue';


    const emit = defineEmits(['close', 'update'])

    const close = () => emit('close')

    const props = defineProps<{
        order: Order
    }>()

    const form = reactive<{
        pao: string
        carne: string
        status: OrderStatus
    }>({
        pao: '',
        carne: '',
        status: OrderStatus.PENDENTE
    })

    const OrderListStatus = Object.values(OrderStatus)

    watch(
        ()=>props.order,
        (newOrder) => {
            form.pao = newOrder.pao,
            form.carne = newOrder.carne,
            form.status = newOrder.status
        },
        {immediate: true}
    )

    const save = ()=>{
        OrderService.putOrder({
            id: props.order.id,
            carne: form.carne,
            pao: form.pao,
            clientName: props.order.clientName,
            status: form.status,
            opcionais: props.order.opcionais,
            priority: props.order.priority
        })
        emit('close')
        emit('update')
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
        min-width: 400px;
        min-height: 30vh;
        box-shadow: #fff 0 0 5px;

        h3 {
            color: black;
        }

        .exit-modal {
            float: right;
            border: none;
            padding: 6px 10px;
            font-weight: bold;
            background-color: #ff0000;

            &:hover {
                background-color: #d20000;
            }
        }

        form{
            display: flex;
            flex-direction: column;
            gap: 8px;

            div{
                width: 80%;
                display: flex;
                justify-content: space-between;
                label, select, input{
                    color: #000000;
                }
            }
        }
    }
}

</style>