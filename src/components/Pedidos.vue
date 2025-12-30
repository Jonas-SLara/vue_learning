<template>
    <table v-if="pedidos.length > 0">
        <thead>
            <th>Cliente</th>
            <th>Carne</th>
            <th>Pães</th>
            <th>Opcionais</th>
        </thead>
        <tbody>
            <tr v-for="(pedido, index) in pedidos" :key="index">
                <td>{{ pedido.cliente }}</td>
                <td>{{ pedido.carne }}</td>
                <td>{{ pedido.pao }}</td>
                <td>{{ pedido.opcionais }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default{
        name: "pedidos",

        data(){
            return{
                pedidos: []
            }
        },

        mounted(){
            this.pedidos = JSON.parse(localStorage.getItem("pedidos"))
            console.log(this.pedidos)
        }
    }
</script>

<style scoped>
    table{
        width: 90%;
        text-align: center;
        border-collapse: collapse;
        margin: 16px auto;
    }
    thead{
        background-color: #fff;
    }
    th, td{
        padding: 4px;
        font-size: 1.1rem;
    }

    tbody{
        background-color: #d1d1d1;
    }

</style>