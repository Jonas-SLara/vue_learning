<template>
  <header>
      <div class="logo">
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
  <Footer></Footer>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';
import { IngredientType, type Ingrediente } from './types/interfaces/Ingredientes';

const STORAGE_KEY = 'ingredientes'

onMounted(()=>{
  alert("App")
  //caso ja tem local nao carrega os dados
  if(localStorage.getItem(STORAGE_KEY)) return
  //inicializa
  const ingredientes: Ingrediente[] = [
    {id: 1, name: 'Pão Francês', type: IngredientType.PAO},
    { id: 2, name: 'Pão Australiano', type: IngredientType.PAO },
    { id: 3, name: 'Carne Bovina', type: IngredientType.CARNE },
    { id: 4, name: 'Frango', type: IngredientType.CARNE },
    { id: 5, name: 'Queijo', type: IngredientType.OPCIONAL },
    { id: 6, name: 'Bacon', type: IngredientType.OPCIONAL }
  ]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredientes))
})
</script>

<style lang="css">

  * {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color: white;
  }

  header{
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-items: center;
    background: linear-gradient(45deg, #333333, #000000);
    width: 100%;
    min-height: 8vh;
    padding: 8px;
  }

  nav{
    width: 30%;
    display: flex;
    justify-content: space-around;
  }

  a{
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    color: #ff5521;
  }
  a:hover{
    color: rgb(220, 255, 255);
    text-decoration: underline;
  }

  h1, h2, h3{
    color: #ffffff;
  }
</style>
