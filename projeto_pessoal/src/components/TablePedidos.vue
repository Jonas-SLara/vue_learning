<template>
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
                    <button class="edit-btn">Editar</button>
                </td>
                <td>
                    <button 
                        class="del-btn"
                        @click="cancelOrder(order.id)"
                    >Cancelar
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { OrderService } from '@/service/OrdersService';
import type { Order } from '@/types/interfaces/Orders';

    defineProps<{
        orders: Order[]
    }>()

    const emit = defineEmits(['cancelOrder'])

    const cancelOrder = (id:number)=>{
        OrderService.deletOrder(id);
        emit('cancelOrder');
    }

</script>

<style lang="css">
    table{
        min-width: 600px;
        min-height: 10vh;
        padding: 8px;
        text-align: center;
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