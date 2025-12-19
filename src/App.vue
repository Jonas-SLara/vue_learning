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
  header{
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-items: center;
    background: linear-gradient(45deg, #333333, #000000);
    width: 100%;
    padding: 8px;
  }

  nav{
    width: 80%;
    display: flex;
    gap: 16px;
  }

  a{
    text-decoration: none;
    font-weight: 600;
    color: #ffffff;
  }
  a:hover{
    color: rgb(220, 255, 255);
  }
</style>
