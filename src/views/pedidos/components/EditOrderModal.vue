<template>
    <div class="backdrop">
        <div class="modal">
            <button class="exit-modal" @click.self="close">X</button>
            <h3>Editar Pedido</h3>
            <form @submit.prevent="save">
                <div>
                    <label for="pao">Pao</label>
                     <select id="pao" v-model="form.pao">
                        <option 
                            v-for="(pao, index) in paes"
                            :key="index"
                            :value="pao.name"
                        >
                            {{ pao.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="carne">Carne</label>
                    <select id="carne" v-model="form.carne">
                        <option 
                            v-for="(carne, index) in carnes"
                            :key="index"
                            :value="carne.name"
                        >
                            {{ carne.name }}
                        </option>
                    </select>
                </div>
                
                <button type="submit">Alterar</button>

            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getIngredients } from '@/service/IgredientsService';
import { OrderService } from '@/service/OrdersService';
import { IngredientType, type Ingrediente } from '@/types/Ingredientes';
import { OrderStatus, type Order } from '@/types/Orders';
import { onMounted, reactive, ref, watch } from 'vue';

    const emit = defineEmits(['close', 'update'])

    const close = () => emit('close')

    const props = defineProps<{
        order: Order
    }>()

    const form = reactive<{
        pao: string
        carne: string
    }>({
        pao: '',
        carne: ''
    })

    watch(
        ()=>props.order,

        (newOrder) => {
            form.pao = newOrder.pao,
            form.carne = newOrder.carne
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

    const carnes = ref<Ingrediente[]>([])
    const paes = ref<Ingrediente[]>([])
    const opcionais = ref<Ingrediente[]>([])
    
    onMounted(
        ()=>{
            const ingredientes = getIngredients();
            paes.value = ingredientes.filter(i => i.type === IngredientType.PAO);
            carnes.value = ingredientes.filter(i => i.type === IngredientType.CARNE);
            opcionais.value = ingredientes.filter(i => i.type === IngredientType.OPCIONAL);
        }
    )

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
                label, select, input, option{
                    color: #000000;
                    padding: 4px;
                }
            }
            button{
                background-color: #ff0000;
                &:hover{
                    background-color: #d20000;
                }
            }
        }
    }
}

</style>