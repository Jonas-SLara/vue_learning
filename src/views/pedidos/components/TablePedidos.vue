<template>
    <div class="table-overflow">
        <table>
            <thead>
                <th>Cliente</th>
                <th>Pão</th>
                <th>Carne</th>
                <th>Opcionais</th>
                <th>Status</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(order) in orders" :key="order.id">
                    <td>{{ order.clientName }}</td>
                    <td>{{ order.pao }}</td>
                    <td>{{ order.carne }}</td>
                    <td>
                        <span v-for="(op, i) in order.opcionais" :key="i">
                            {{ op + " " }}
                        </span>
                    </td>
                    <td>{{ order.status }}</td>
                    <td>
                        <button
                            v-if="order.status != OrderStatus.FINALIZADO"
                            class="edit-btn"
                            @click="editOrderModal(order)"
                        >Editar</button>
                    </td>
                    <td>
                        <button v-if="order.status != OrderStatus.FINALIZADO"
                            class="del-btn"
                            @click="cancelOrder(order.id)"
                        >Cancelar
                        </button>
                    </td>
                    <td>
                        <button v-if="order.status===OrderStatus.PENDENTE">
                            FINALIZAR
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { OrderStatus, type Order } from '@/types/interfaces/Orders';
import { onMounted, ref } from 'vue';

    defineProps<{
        orders: Order[]
    }>()

    const emit = defineEmits(['cancel-order', 'edit-order'])

    const cancelOrder = (id:Number)=>{
        emit('cancel-order', id);
    }

    const editOrderModal = (order: Order)=>{
        emit('edit-order', order)
    }

    const filtroOption = ref<OrderStatus>()

    const setFilter = ()=>{

    }

    //iniciar com filtro de pendentes
    onMounted(()=>{
        filtroOption.value = OrderStatus.PENDENTE
    })
</script>

<style lang="css">
    .table-overflow{
        width: 100%;
        height: 50vh;
        overflow-y: auto;
        padding: 8px;

    }
    table{
        width: 100%;
        padding: 8px;
        text-align: center;
        margin: 8px;
    }
    table, tr, th, td{
        border-collapse: collapse;
    }

    tr:nth-child(even) {
        background-color: #ff4400f2;
    }

     tr:nth-child(odd) {
        background-color: #1c1c1c;
    }

    td{
        padding: 4px;
    }

    thead{
        background-color: #37b8c2;
        padding: 8px;
    }

    button{
        padding: 8px;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
    }

    .edit-btn{
        background-color: #3ad8e3;
        border: solid 2px #ffffff;
        color: #ffffff;
    }

    .edit-btn:hover{
        background-color: #37b8c2;
    }

    .del-btn{
        background-color: #ff0000;
    }

    .del-btn:hover{
        background-color: #d20000;
    }
</style>