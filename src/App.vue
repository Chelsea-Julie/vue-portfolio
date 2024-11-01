<template>
  <NavBarVue/>
  <main>
    <router-view/>
  </main>
  
  <FooterVue/>

</template>

<script setup>
import FooterVue from "./components/Footer.vue";
import NavBarVue from "./components/NavBar.vue";


</script>

<style src="./assets/css/style.css">

</style>
