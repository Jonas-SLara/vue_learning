<template class="center">
    <h1 class="title">Processamento de pedidos</h1>
    <ButtonCounter @increment="increment" @decrement="decrement"/>
    <div>
        <h2 class="title">Lista de Pedidos | count: {{ count }}</h2>
        
        <table v-if="posts.length > 0" class="pedidos-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título Pedido</th>
                    <th>Data</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.created }}</td>
                    <td>{{ post.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { PostStatus, type PostsData } from '@/models/posts';
import ButtonCounter from '../components/ButtonCounter.vue';
import Pedido from '../components/Pedido.vue';
import { computed, onMounted, ref, watch } from 'vue';

const posts = ref<PostsData[]>([])

//aqui verifica se tem pedidos ou não para rederizar
const hasPosts = computed(()=>{
    return posts.value.length > 0 ? true : false;
})

const count = ref(0)

const increment = () => {
    let newId: number = posts.value.length + 1;
    const date: Date = new Date();

    posts.value.push({
        id: newId,
        title: `Pedido ${newId}`,
        created: `
        ${date.getHours()}:${date.getMinutes()}-
        /${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
        status: PostStatus.Pendente
    })
    count.value++
}

const decrement = () => {
    posts.value.pop()
    count.value--
}

const STORAGE_PEDIDOS = 'pedidos_local_storage'

//ao montar carrega os dados do local storage
onMounted(() => {
    const pedidos_data = localStorage.getItem(STORAGE_PEDIDOS)
    if(pedidos_data){
        posts.value = JSON.parse(pedidos_data);
        count.value = posts.value.length;
    }
})

//sempre que posts mudar, atualizar no local storage
watch(posts, (newVal)=>{
    localStorage.setItem(STORAGE_PEDIDOS, JSON.stringify(newVal));
}, {deep: true})

</script>

<style>
    .title{
        width: 100%;
        text-align: center;
    }
    table{
        margin: auto;
        background-color: #e6e6e6;
        color: #333333;
        padding: 0;
        min-width: 80%;
        border-collapse: collapse;
        text-align: center;
        font-size: 1.2rem;
        border-radius: 16px;
    }

    th{
        padding: 4px;
    }

    td{
        border: 2px solid #f2f2f2;
        padding: 4px;
    }
</style>