<template>
  <div class="option_menu_btn">
    <button class="btn increment" @click="$emit('increment')">+</button>
    <button class="btn decrement" @click="$emit('decrement')">-</button>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.option_menu_btn{
background-color: rgb(44, 44, 44);
display: flex;
justify-content: center;
width: 50%;
margin: auto;
border-radius: 32px;
gap: 8px;
padding: 2px;
}

.btn {
  background-color: #333;
  color: #fff;
  border-radius: 50%;
  border: 4px solid rgb(255, 255, 255);
  padding: 4px;
  min-width: 30px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
}

.increment{
  background-color: rgb(18, 18, 255);
}
.decrement{
  background-color: red;
}
</style>
