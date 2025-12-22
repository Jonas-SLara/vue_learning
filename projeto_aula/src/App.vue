<template>
  <NavBar logo="/favicon.ico"></NavBar>
  <RouterView/>
  <Footer></Footer>
</template>

<script>
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';

  export default{
    name: "app",
    components: {
      NavBar,
      Footer
    }
  }
</script>

<style>
  nav{
        width: 100%;
        background: linear-gradient(180deg, #eeeeee, #cccccc );
        padding: 8px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 12vh;
  }

  footer{
    width: 100%;
    background: linear-gradient(180deg, #cccccc, #eeeeee);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 12vh;
  }

  h1, h2, h3{
    color: white;
    width: 100%;
    text-align: center;
  }

  .info_box{
    background-color: #cccccc5a;
    width: 50%;
    border-radius: 16px;
    margin: 16px 0;
  }
</style>
