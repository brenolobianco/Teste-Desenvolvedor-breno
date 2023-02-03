<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
  

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/cadastro">Cadastro</RouterLink>
        <RouterLink to="/dashboard">dashboard</RouterLink>
        <RouterLink to="/">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
