<template>
    <Main>
        <Info>
            <h2>Lista de Pedidos</h2>

            <div class="filtro-opt">
                <span>PENDENTE</span>
                <button v-on:click="setFilter()">click</button>
                <span>FINALIZADOS</span>
            </div>

            <TablePedidos
                :orders="orders"
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

import { onMounted, ref } from 'vue';
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

    const filtrar = ref(false)

    //para cada pedido pega os pendentes
    const setFilter = ()=>{
        orders.value = orders.value.filter((e) =>{
            e.status === OrderStatus.PENDENTE
        })
        orders.value.forEach((e)=>{
            console.log(e.status)
        })
    }
</script>

<style lang="scss">
    .filtro-opt{
        button{
            background-color: aqua;
            color:#fff;
            border: solid 2px #fff;
            &:hover{
                background-color: rgb(4, 146, 146);
            }
        }
    }
</style>