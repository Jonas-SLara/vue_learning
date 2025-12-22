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
    text-shadow: #fff 0px 0px 2px;
  }

  .info_box{
    background-color: #650101aa;
    width: 50%;
    min-height: 10vh;
    border-radius: 16px;
    margin: 16px 0;
  }

  input{
    padding: 8px;
    border-radius: 4px;
    font-size: 1rem;
    width: 300px;
    border: none;
  }

  select{
    padding: 8px;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #fff;
    width: 300px;
  }

</style>
