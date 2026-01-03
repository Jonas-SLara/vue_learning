<template>
    <header>
        <nav>
            <RouterLink to="">DashBoard</RouterLink>
            <button @click="logout()">Sair</button>
        </nav>
    </header>

  <RouterView />
  <Footer/>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';

    const router = useRouter()

    const logout = ()=>{
        router.push("/login")
    }
</script>

<style>

</style>