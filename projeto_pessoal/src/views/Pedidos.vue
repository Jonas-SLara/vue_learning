<template>
    <Main>
        <Info>
            <h2>Lista de Pedidos</h2>
            <TablePedidos 
                :orders="orders"
                @cancel-order="loadOrders()"
            />
        </Info>
    </Main>
</template>

<script setup lang="ts">
import Main from '../components/Main.vue';
import Info from '../components/Info.vue';
import TablePedidos from '@/components/TablePedidos.vue';
import { onMounted, ref } from 'vue';
import type { Order } from '@/types/interfaces/Orders';
import { OrderService } from '@/service/OrdersService';

const orders = ref<Order[]>([])

//carregar lista de pedidos sempre que mostrado

const loadOrders = ()=>{
    orders.value = OrderService.getAllOrders()
}

onMounted(()=>{
    loadOrders()
})

</script>

<style lang="css">
    
</style>