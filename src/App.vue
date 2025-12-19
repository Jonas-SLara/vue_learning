<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ButtonCounter from './components/ButtonCounter.vue'
import { ref } from 'vue'
import Pedidos from './components/Pedido.vue'



</script>

<template>
  <header>
      <div>
        <img src="/src/assets/logo.svg" width="32px"/>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pedidos">Pedidos</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Registrar</RouterLink>
      </nav>
  </header>
 
  <RouterView />
</template>

<style>
  *{
    color: #333
  }
  header{
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-items: center;
    background-color: #dedede;
    width: 100%;
    padding: 8px;
  }

  nav{
    width: 80%;
    display: flex;
    gap: 8px;
  }

  a{
    text-decoration: none;
    font-weight: 600;
  }
</style>
