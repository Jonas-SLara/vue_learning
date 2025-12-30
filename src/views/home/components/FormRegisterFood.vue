<template>
    <form 
        id="form_food_register"
        @submit.prevent="handleSubmit()" 
        class="form">

        <div class="input_container">
            <label for="nome">Nome: </label>
            <input id="nome" v-model="form.nome"/>
        </div>

        <div class="input_container">
            <label for="pao">Escolha Seu Pão: </label>
            <select v-model="form.pao">
                <option 
                    v-for="(pao, index) in paes"
                    :key="index"
                    :value="pao.name"
                >
                    {{ pao.name }}
                </option>
            </select>
        </div>

        <div class="input_container">
            <label for="carne">Escolha Sua Carne: </label>
            <select v-model="form.carne">
                <option
                    v-for="(carne, index) in carnes"
                    :key="index"
                    :value="carne.name"
                >
                    {{ carne.name }}
                </option>
            </select>
        </div>

        
        <section class="opcionais_box">
            <h4>Escolha Os seus Complementos</h4>
            <div v-for="(opcional, index) in opcionais" :key="index">
                <input 
                    type="checkbox"
                    :value="opcional.name"
                    v-model="form.opcional"
                />
                <span>{{ opcional.name }}</span>
            </div>
        </section>
       
        <div>
            <input type="submit" value="SUBMIT" class="submit" />
        </div>
    </form>
</template>

<script setup lang="ts">
import { getIngredients } from '@/service/IgredientsService';
import { OrderService } from '@/service/OrdersService';
import { IngredientType, type Ingrediente } from '@/types/interfaces/Ingredientes';
import { OrderPriority, OrderStatus, type Order } from '@/types/interfaces/Orders';

import { onMounted, reactive, ref } from 'vue';

    //incicialização de dados do formulario, select com options pre definidas

    const form = reactive({
        nome: '',
        carne: '',
        pao: '',
        opcional: []
    })

    const carnes = ref<Ingrediente[]>([])
    const paes = ref<Ingrediente[]>([])
    const opcionais = ref<Ingrediente[]>([])
    
    onMounted(() =>{
        const ingredientes = getIngredients();
        paes.value = ingredientes.filter(i => i.type === IngredientType.PAO);
        carnes.value = ingredientes.filter(i => i.type === IngredientType.CARNE);
        opcionais.value = ingredientes.filter(i => i.type === IngredientType.OPCIONAL);
    })

    //tratar submissao de formulario, abrir popup depois
    
    const emit = defineEmits(['cadastrado'])

    function handleSubmit(){
       
        if(!validateForm()) return

        const order: Order = {
            status: OrderStatus.PENDENTE,
            clientName: form.nome,
            pao: form.pao,
            carne: form.carne,
            opcionais: form.opcional,
            priority: OrderPriority.MEDIA,
            id: 0
        }

        OrderService.saveOrder(order)
        emit('cadastrado', order)
    }

    // tratar campos de formulario
    const validateForm = (): boolean => {
        if(
            form.carne.trim() === '' ||
            form.nome.trim() === '' ||
            form.pao.trim() === ''
        ){
            alert("Preencha todos os campos obrigatórios")
            return false
        }
        return true
    }

</script>

<style scoped>
    .form{
        width: 100%;
        display: flex;
        gap: 4px;
        flex-direction: column;
    }

    .form > .input_container{
        width: 80%;
        
        padding: 8px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
    }

    .form .input_container input,
    select{
        width: 300px;
        padding: 4px;
        color: #000;
        font-size: 1rem;
    }

    option{
        color: #000;
    }

    .form label{
        font-size: 1.1rem;
        font-weight: 500;
    }

    .opcionais_box{
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        font-size: 1.2rem;
        gap: 16px;
    }

    .opcionais_box h4{
        width: 100%;
    }

    .submit{
        background-color: rgb(0, 0, 0);
        color: white;
        border: 2px solid #ff5521;
        font-weight: 600;
        width: 100px; 
        padding: 8px;
        border-radius: 16px;
        margin: 16px 0;
        float: right;
    }


    .submit:hover{
        box-shadow: #ff5521 0 0 10px;
    }

</style>