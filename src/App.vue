<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { IngredientType, type Ingrediente } from './types/Ingredientes';
import { onMounted } from 'vue';
import { UserRole, type Users } from './types/Users';
import { UserServices } from './service/UsersServices';
const STORAGE_KEY = 'ingredientes'

onMounted(()=>{
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

  const userAdmin: Users = {
    name: "admin",
    email: "admin@admin.com",
    id: 0,
    password: 'admin',
    orders: [],
    role: UserRole.ADMIN,
  }

  UserServices.register(userAdmin)

})
</script>

<style lang="scss">

  header{
    display: flex;
    justify-content: space-around;
    gap: 16px;
    align-items: center;
    background: linear-gradient(45deg, #333333, #000000);
    width: 100%;
    min-height: 8vh;
    padding: 8px;

    nav{
      width: 100%;
      display: flex;
      justify-content: space-around;
      
      a{
        text-decoration: none;
        font-weight: 600;
        font-size: 1.2rem;
        color: #ff5521;

        &:hover{
          color: rgb(220, 255, 255);
          text-decoration: underline;
        }
      }
    }
  }

  h1, h2, h3{
      color: #ffffff;
  }
</style>
