<template>
    <Main>
        <div class="info_box">
            <h1>X Tudo em Santa Maria!</h1>
            <h2>Faça seu Pedido</h2>
        </div>
        <Form></Form>
    </Main>
</template>

<script>
import Form from '../components/Form.vue';
import Main from '../components/Main.vue';

    export default{
        name: "home",
        components: {
            Main,
            Form
        }
    }
</script>

<style>
   
</style>