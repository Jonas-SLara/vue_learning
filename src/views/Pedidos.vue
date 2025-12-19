<template>
    <h2>Lista de Pedidos</h2>
    <ButtonCounter />
    <Pedido v-for="post in posts" :key="post.id" :title="post.title" />
</template>

<script setup lang="ts">
import ButtonCounter from '../components/ButtonCounter.vue';
import Pedido from '../components/Pedido.vue';
import { ref } from 'vue';

const posts = ref([
  { id: 1, title: 'Pedido 1' },
  { id: 2, title: 'Pedido 2' },
  { id: 3, title: 'Pedido 3' },
])


</script>

<style></style>