<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://chelsea-julie.github.io/all-images/images/Random/cj.png" alt="logo" class="img-thumbnail" loading="lazy">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item" :class="{ active: isActive('/') }">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/about') }">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/resume') }">
              <router-link class="nav-link" to="/resume">Education & Experience</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/projects') }">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('/contact') }">
              <router-link class="nav-link" to="/contact">Reach Me</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { watch, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const currentPath = ref(route.path);
  
      // Watch for route changes and update currentPath
      watch(route, (newRoute) => {
        currentPath.value = newRoute.path;
      });
  
      // Method to check if the link should be active
      const isActive = (path) => currentPath.value === path;
  
      return { isActive };
    },
  };
  </script>
  
  <style scoped>
  /* Styling for the active link */
  .nav-link.active, .router-link-active {
    font-weight: bold;
    text-decoration: underline;
    color: aliceblue !important;
  }
  
  nav {
    background-color: #765b4d;
    position: fixed;
    width: 100%;
    min-height: 5rem;
  }
  
  nav a, .router-link-active {
    font-weight: bold;
    color: aliceblue;
    font-family: "Playfair Display", serif;
  }

  .nav-link:hover{
    color: aliceblue;
    text-decoration: underline;
  }

  
  </style>
  