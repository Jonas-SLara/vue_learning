<template>
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Registrar</RouterLink>
    </nav>
  </header>

  <RouterView />
  <Footer/>
</template>

<script lang="ts" setup>
import Footer from '@/components/Footer.vue';


</script>

<style lang="scss">

</style>