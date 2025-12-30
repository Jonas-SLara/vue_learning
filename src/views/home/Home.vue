<template>
    <Main>
        <Info>
            <h2>X Tudo Santa Maria!</h2>
            <p> Monte seu X escolhendo nossas opções de pão, carne 
                e varios dos complementos, <br> aqui você pode montar sua obra de arte
                ou uma torre de comida.
            </p>
            <Button 
                @active="setActiveButton"
                :text="text"
                :isactive="isactive"
            />
        </Info>

        <Info v-if="isactive">
            <FormRegisterFood @cadastrado="openModalOk"/>
        </Info>
        <AlertModal 
            v-if="isModalOkActive"
            :text="textModal" 
            :description="descModal"
            @close="isModalOkActive = false"
        />
    </Main>
    
</template>

<script setup lang="ts">
import Info from '../../components/Info.vue';
import Main from '../../components/Main.vue';
import Button from './components/Button.vue';
import { ref } from 'vue';
import FormRegisterFood from './components/FormRegisterFood.vue';
import AlertModal from '@/components/AlertModal.vue';
import type { Order } from '@/types/interfaces/Orders';
import { OrderService } from '@/service/OrdersService';
    
    // aqui eu coloquei os atributos para o botao
    const isactive = ref(false)
    const text = ref("Escolha seu X")

    //função para abrir o modal de sucesso quando o emit for acionado
    const openModalOk = (order: Order)=>{
        descModal.value = OrderService.toString(order)
        isModalOkActive.value = true
    }

    const isModalOkActive = ref<Boolean>(false)

    const textModal = ref<string>("Pedido Cadastrado Com Sucesso")

    const descModal = ref<string>("")

    function setActiveButton(){
        isactive.value = !(isactive.value);
        //alert(isactive.value)
        text.value = (isactive.value)? "Cancelar" : "Escolha Seu X";
    }
</script>

<style lang="css" scoped>

</style>