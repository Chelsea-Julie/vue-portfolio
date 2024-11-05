<template>
    <div id="project">
        <div class="container-fluid">
            <h1 v-if="isChecked" data-aos="zoom-out">Projects</h1>
            <h1 v-else data-aos="zoom-out">Case Studies</h1>
      
            <label class="switch">
              <input type="checkbox" v-model="isChecked">
              <span class="slider"></span>
            </label>
        </div>
      
        <div class="container-fluid d-flex flex-row justify-content-center">
          
            <div class="concat" v-if="isChecked">
                <ul class="cards">
                <li cont v-for="(project, index) in projects" :key="index" data-aos="fade-right">
                    <a href="" class="card">
                    <div class="card__overlay">
                      <div class="card__header d-flex flex-row justify-content-center">
                        <div class="card__header-text">
                          <div class="col-12">
                            <img :src="project.img_url" :alt="project.name">
                          </div>
                          <div class="col-12">
                            <h3 class="card__title">{{ project.name }}</h3>            
                          </div>
                         
                        </div>
                      </div>
                      <p class="card__description">{{ project.description }}</p>
                      <div class="buttonsThingy">
                        <div class="col d-flex flex-row justify-content-around">
                          <a class="btn" :href="project.github" target="_blank">GitHub</a>
                          <a class="btn" :href="project.vercel" target="_blank">Vercel</a>
                        </div>
                      </div>
                    </div>
                    </a>      
                </li>
                </ul>
            </div>
      
            <div class="concat" v-else>
              <ul class="cards" cards>
                <li cont data-aos="fade-right" cad>
                    <a href="" class="card">
                    <div class="card__overlay">
                      <div class="card__header d-flex flex-row justify-content-center">
                        <div class="card__header-text">
                          <div class="col-12">
                            <img src="https://chelsea-julie.github.io/all-images/images/vue-eomp/icons8-scrum-64 (1).png" alt="project.name">
                          </div>
                          <div class="col-12">
                            <h3 class="card__title">Scrum Project</h3>            
                          </div>
                          
                        </div>
                      </div>
                      <p class="card__description">In this case study, I share our SCRUM-based approach to planning and designing a mobile app for a fast-food chain, with links to key resources.</p>
                      <div class="buttonsThingy">
                        <div class="col d-flex flex-row justify-content-around">
                          <a class="btn" href="https://drive.google.com/file/d/1q6yU1ushl6gu2qr9no3EsqoEwvsPEdQZ/view" target="_blank">VIEW</a>
                          <a class="btn" href="https://drive.usercontent.google.com/u/0/uc?id=1q6yU1ushl6gu2qr9no3EsqoEwvsPEdQZ&export=download" target="_blank">DOWNLOAD</a>
                        </div>
                      </div>
                    </div>
                    </a>      
                </li>
      
                <li cont data-aos="fade-right" cad>
                    <a href="" class="card">
                    <div class="card__overlay">
                      <div class="card__header d-flex flex-row justify-content-center">
                        <div class="card__header-text">
                          <div class="col-12">
                            <img src="https://chelsea-julie.github.io/all-images/images/vue-eomp/icons8-ux-50.png" alt="project.name">
                          </div>
                          <div class="col-12">
                            <h3 class="card__title">UI/UX Hackathan</h3>            
                          </div>
                         
                        </div>
                      </div>
                      <p class="card__description">This case study covers our SCRUM-based approach to planning and designing a mobile app for a fast-food chain, with links to key resources.</p>
                      <div class="buttonsThingy">
                        <div class="col d-flex flex-row justify-content-around">
                          <a class="btn" href="https://drive.google.com/file/d/1q6yU1ushl6gu2qr9no3EsqoEwvsPEdQZ/view" target="_blank">VIEW</a>
                          <a class="btn" href="https://drive.usercontent.google.com/u/0/uc?id=1q6yU1ushl6gu2qr9no3EsqoEwvsPEdQZ&export=download" target="_blank">DOWNLOAD</a>
                        </div>
                      </div>
                    </div>
                    </a>      
                </li>
              </ul>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { ref, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const projects = computed(() => store.state.projects);
  
  // Use ref for isChecked to track toggle state reactively
  const isChecked = ref(true);
  
  onMounted(() => {
  store.dispatch('fetchProjects');
  
  AOS.init({ duration: 1500, once: false });
  });
  </script>
  
  <style scoped>
  
  :root {
  --surface-color: #fff;
  --curve: 40;
  }
  
  [cont] {
  min-height: 20rem;
  max-width: 20rem;
  }
  
  .card {
  background-color: white;
  }
  
  .concat {
  width: 80%;
  }
  
  * {
  box-sizing: border-box;
  }
  
  body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #fef8f800;
  }
  
  * {
  color: black !important;
  }
  
  .cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
  }
  
  [cards]{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 4rem 5vw;
    padding: 0;
    list-style-type: none;
  }
  
  [cad]{
    width: 20rem;
  }
  
  .card {
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  }
  
  .card__image {
  width: 100%;
  height: auto;
  }
  
  .card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(var(--curve) * 1px);
  background-color: var(--surface-color);
  transform: translateY(100%);
  transition: .2s ease-in-out;
  }
  
  .card:hover .card__overlay {
  transform: translateY(0);
  }
  
  .card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;
  background-color: var(--surface-color);
  transform: translateY(-100%);
  transition: .2s ease-in-out;
  }
  
  .card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
  }
  
  .card__arc path {
  fill: var(--surface-color);
  }
  
  .card:hover .card__header {
  transform: translateY(0);
  }
  
  .card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  }
  
  .card__title {
  font-size: 1em;
  margin: 0 0 .3em;
  color: #6A515E !important;
  font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 50rem;
        font-style: normal;
        color: aliceblue;

  }
  
  .card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: .8em;
  color: #D7BDCA;
  }
  
  .card__status {
  font-size: .8em;
  color: #D7BDCA;
  }
  
  .card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #90486c;
  display: block;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  background-color: #765b4d;
  font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 50rem;
        font-style: normal;
        color: aliceblue !important;

  }
  
  .buttonsThingy {
  background-color: #765b4d;
  }
  
  * {
  background: rgba(255, 255, 255, 0);
  }
  
  h1 {
  color: aliceblue !important;
  }
  
  img {
  width: 10rem;
  }
  
  .btn {
  background-color: #ceaa9a;
  font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 50rem;
        font-style: normal;
        color: aliceblue !important;

  }
  
  @media only screen and (max-width: 935px) {
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  [cont] {
    width: 20rem;
    height: 10rem;
  }
  }
  
  /* Toggle styling */
  .switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  }
  
  .switch input {
  opacity: 0;
  width: 0;
  height: 0;
  }
  
  .slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background: #a48270;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  left: 0.3em;
  bottom: 0.3em;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .switch input:checked + .slider {
  background: #ad8570;
  }
  
  .switch input:checked + .slider:before {
  transform: translateX(1.6em);
  width: 2em;
  height: 2em;
  bottom: 0;
  }

  #project{
    padding-top: 5rem;
  }
  </style>
  