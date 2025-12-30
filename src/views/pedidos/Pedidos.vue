<template>
    <Main>
        <Info>
            <h2>Lista de Pedidos</h2>
            <TablePedidos
                :orders="orders"
                @edit-order="openModal"
                @cancel-order="loadOrders()"
            />
            <EditOrderModal
                v-if="orderSelected"
                @close="orderSelected = null"
            />
        </Info>
    </Main>
</template>

<script setup lang="ts">
import Main from '../../components/Main.vue';
import Info from '../../components/Info.vue';

import { onMounted, ref } from 'vue';
import type { Order } from '@/types/interfaces/Orders';
import { OrderService } from '@/service/OrdersService';
import TablePedidos from './components/TablePedidos.vue';
import EditOrderModal from './components/EditOrderModal.vue';

const orders = ref<Order[]>([])

//carregar lista de pedidos sempre que mostrado

const loadOrders = ()=>{
    orders.value = OrderService.getAllOrders()
}

onMounted(()=>{
    loadOrders()
})

const orderSelected = ref<Order | null>(null)

const openModal = (order: Order)=>{
    //nao passar o objeto inteiro mas uma copia dele
    orderSelected.value = {...order}
}

</script>

<style lang="css">
    
</style>