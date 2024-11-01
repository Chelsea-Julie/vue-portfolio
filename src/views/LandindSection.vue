<template>
    <div class="container-fluid">
      <div class="row vh-100 align-items-center" id="landing">
        <div class="col">
          <div id="details">
            <h1>Hello</h1>
            <h2 class="display-1" id="typed-text">
              
            </h2>
  
            <p v-if="title">
              I am
              <span>{{ title }}</span>
            </p>
            <Spinner v-else />
          </div>
        </div>
        <div class="col" data-aos="flip-up">
          <img
            src="https://chelsea-julie.github.io/all-images/images/Humans/landing.jpg"
            alt="logo"
            me
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, computed } from 'vue';
  import { useStore } from 'vuex';
  import Spinner from '@/components/Spinner.vue';
  // Add the following import for Typed.js
  import Typed from 'typed.js';
  
  const jobtitle = computed(() => store.state.jobtitle);
  const store = useStore();
  const title = ref('a software developer');
  const cnt = ref(-1);
  
  function repeat() {
    try {
      if (cnt.value == jobtitle.value?.length) cnt.value = 0;
      title.value = jobtitle.value?.at(cnt.value)?.title;
      setTimeout(repeat, 2000);
      cnt.value++;
    } catch (e) {
      console.log('FOR THE LOVE OF...');
      
    }
  }
  
  // Add Typed.js initialization inside onMounted
  onMounted(() => {
    store.dispatch('fetchJobtitle');
    repeat();
  
    const options = {
      strings: ["I'm Chelsea Julie"],
      typeSpeed: 80,
      backSpeed: 80,
      showCursor: false,
    };
  
    const typed = new Typed('#typed-text', options);
    
    console.log(typed, "hey");
    
  });
  </script>
  
  <style scoped>
  /* Add any styles you want for customization */
  #typed-text {
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 50rem;
    font-style: normal;
    color: aliceblue;
  }
  .container-fluid{
    padding-top: 4rem;
  }
  
  </style>
  