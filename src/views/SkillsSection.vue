<template lang="">
    <div class="container-fluid  d-flex flex-row align-items-center pb-5">
        <div>
            <h1>
                Skills
            </h1>
            <div  class="d-flex flex-row justify-content-center">
    
                <div class="wrap d-flex flex-column justify-content-center gap-4 flex-wrap">
                    <Card v-for="(card, index) in skills" :key="index" data-aos="zoom-in-right">
                        <template #cardHeader>
                            <img class="img-fluid" :src="skills[index].img_url" :alt="skills[index].name" loading="lazy">
                        </template>
                        <template #cardBody>
                            {{skills[index].name}}
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
  
    import {computed, onMounted } from 'vue'
    import {useStore} from 'vuex'
    import Card from '@/components/Card.vue'
    const store = useStore()
  

    const skills = computed(() => store.state.skills )


  
    onMounted(() => {store.dispatch('fetchSkills')})

    


  
</script>


<style scoped>
    .wrap{
        width: 70%;
        background-color: red !important;
    }
    .img-fluid{
        width: 5rem;
    }
    .card {
   
    border: 1px solid #d7ccc8 !important; 
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    width: 300px;
    max-width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    border-bottom-right-radius: 5rem;
    border-top-left-radius: 5rem;
  }

  .card:hover {
    transform: translateY(-5px); 
  }

  #cardHeader {
    color: #6d4c41 ; 
    margin-bottom: 10px;
  }

  .card p {
    color: #6d4c41 ; 
    font-size: 16px;
    line-height: 1.6;
  }

  
</style>