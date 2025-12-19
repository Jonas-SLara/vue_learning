<template>
  <button class="btn" @click="increment">+</button>
  <button class="btn" @click="decrement">-</button>
  <h2>Pedidos: {{ count }}</h2>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<style>
.btn {
  background-color: #333;
  color: #fff;
  border-radius: 16px;
  padding: 8px;
  cursor: pointer;
}
</style>
