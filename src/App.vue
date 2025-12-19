<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ButtonCounter from './components/ButtonCounter.vue'
import { ref } from 'vue'
import Pedidos from './components/Pedidos.vue'

const posts = ref([
  { id: 1, title: 'Pedido 1' },
  { id: 2, title: 'Pedido 2' },
  { id: 3, title: 'Pedido 3' },
])
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <ButtonCounter />
  <Pedidos v-for="post in posts" :key="post.id" :title="post.title" />
  <RouterView />
</template>

<style scoped></style>
