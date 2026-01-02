<template>
    <Main>
        <Info>

            <div class="filtro-opt">
                <button @click="setFilterPendentes()">Pendentes</button>
                <button @click="setFilterFinalizados()">Finalizados</button>
            </div>

            <h2>Lista de Pedidos</h2>

            <TablePedidos
                :orders="ordersFilter"
                @edit-order="openModalEdit"
                @cancel-order="openModalCancel"
            />
        </Info>
        <EditOrderModal
            v-if="orderSelected"
            :order="orderSelected"
            @close="orderSelected = null"
            @update="loadOrders()"
        />
        <CancelOrderModal
            v-if="isCancelModalActive"
            @close="isCancelModalActive = false"
            :id-selected="idSelected"
            :description="description"
            :text="text"
            @update="loadOrders()"
        />
    </Main>
</template>

<script setup lang="ts">
import Main from '../../components/Main.vue';
import Info from '../../components/Info.vue';

import { computed, onMounted, ref } from 'vue';
import { OrderStatus, type Order } from '@/types/interfaces/Orders';
import { OrderService } from '@/service/OrdersService';
import TablePedidos from './components/TablePedidos.vue';
import EditOrderModal from './components/EditOrderModal.vue';
import CancelOrderModal from './components/CancelOrderModal.vue';

    const orders = ref<Order[]>([])

    //carregar lista de pedidos sempre que mostrado

    const loadOrders = ()=>{
        orders.value = OrderService.getAllOrders()
    }

    const filterStatus = ref<OrderStatus>(OrderStatus.PENDENTE)
    
    const ordersFilter = computed(()=>{
        return orders.value.filter( o => o.status === filterStatus.value)
    })

    const setFilterPendentes = (): void => {
        filterStatus.value = OrderStatus.PENDENTE
    }

    const setFilterFinalizados = (): void =>{
        filterStatus.value= OrderStatus.FINALIZADO
    }

    onMounted(()=>{
        loadOrders()
    })

    //modal para editar um pedido passado pelo emit no tablePedidos
    const orderSelected = ref<Order | null>(null)
    const openModalEdit = (order: Order)=>{
        orderSelected.value = {...order}
    }

    // modal para cancelar pedido passado pelo emit no tablePedidos
    const isCancelModalActive = ref<boolean>(false)
    const description = ref<string>("tems certeza que quer cancelar o seu pedido")
    const text = ref<string>("cancelamento de pedido")
    const idSelected = ref<number>(0)

    const openModalCancel = (id: number)=>{
        isCancelModalActive.value = true
        idSelected.value = id
    }

</script>

<style lang="scss">
    
</style>