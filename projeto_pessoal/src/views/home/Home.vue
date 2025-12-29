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
            <FormRegisterFood/>
        </Info>
    </Main>
    
</template>

<script setup lang="ts">
    import Info from '../../components/Info.vue';
    import Main from '../../components/Main.vue';
    import Button from './components/Button.vue';
    import { ref } from 'vue';
    import FormRegisterFood from './components/FormRegisterFood.vue';
    

    const isactive = ref(false)
    const text = ref("Escolha seu X")

    function setActiveButton(){
        isactive.value = !(isactive.value);
        //alert(isactive.value)
        text.value = (isactive.value)? "Cancelar" : "Escolha Seu X";
    }
</script>

<style lang="css">

</style>