<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- Essa tag possibilita que o leitor de telas consiga 
    identificar que a página é para ser lida em PT-BR 
  https://asesweb.governoeletronico.gov.br/
  AChecker-->
  <html lang="pt-br">
    <RouterView />
  </html>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(248, 237, 237, 1);
  color: rgba(23, 59, 69, 1);
}
body{
  background-color: rgba(248, 237, 237, 1);
  color: rgba(23, 59, 69, 1);
}
</style>
