<template>
    <Main>
        <div class="info_box">
            <h2>Lista de Pedidos</h2>
            <Pedidos></Pedidos>
        </div>
    </Main>
</template>

<script>
    import Main from '../components/Main.vue';
    import Pedidos from '../components/Pedidos.vue';
    export default{
        name: "pedidos",
        components: {
            Main,
            Pedidos
        }
    }
</script>

<style>

    
</style>