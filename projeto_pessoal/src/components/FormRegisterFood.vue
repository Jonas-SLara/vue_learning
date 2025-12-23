<template>
    <form 
        id="form_food_register"
        @submit.prevent="" 
        class="form">

        <div class="input_container">
            <label for="nome">Nome: </label>
            <input id="nome" :value="nome" />
        </div>

        <div class="input_container">
            <label for="pao">Escolha Seu Pão: </label>
            <select>
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
            <select>
                <option
                    v-for="(carne, index) in carnes"
                    :key="index"
                    :value="carne.name"
                >
                    {{ carne.name }}
                </option>
            </select>
        </div>

        <div>
            <input type="submit" value="SUBMIT" class="submit" />
        </div>
    </form>
</template>

<script setup lang="ts">
import { getIngredients } from '@/service/IgredientsService';
import { IngredientType, type Ingrediente } from '@/types/interfaces/Ingredientes';
import { onMounted, reactive, ref } from 'vue';

    const nome = ref("")

    const form = reactive({
        carne: String,
        pao: String,
        opcional: String
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
    
    function handleSubmit(){

    }

</script>

<style scoped>
    .form{
        width: 90%;
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
    .form .input_container select{
        width: 300px;
        padding: 4px;
        color: #000;
        font-size: 1rem;
    }

    .form label{
        font-size: 1.1rem;
        font-weight: 500;
    }

    .submit{
        background-color: rgb(0, 0, 0);
        color: white;
        border: 2px solid #ff5521;
        font-weight: 600;
        width: 100px; 
        padding: 8px;
        border-radius: 16px;
    }

    .submit:hover{
        box-shadow: #ff5521 0 0 10px;
    }

</style>