<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Welcome from '@/components/Welcome.vue'
</script>

<template>
  <header class="flex items-center justify-around h-screen ">
    <div class="flex ">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    <div class="flex flex-col">
      <welcome msg="Welcome" />
      <nav class="flex gap-x-4 text-green-400 ">
        <RouterLink to="/" class="hover:text-black">Login</RouterLink>|
        <RouterLink to="/Register" class="hover:text-black">Register</RouterLink>
      </nav>
    </div>
    
    </div>
    <RouterView /> 
  </header>
  <!-- call the body which is the views -->
</template>


<style>

</style>
