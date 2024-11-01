<template>
    <div class="cont" about>
        <h1>About me</h1>

        <div class="row">
            <!-- <div class="col-sm-12 col-md-12 col-lg-6">

            </div> -->

            <div class="col-sm-12 col-md-12 col-lg-12" v-if="about">
                <p>I am an aspiring software developer with a passion for continuous learning and a deep interest 
                    in everything related to technology and programming. My journey in software development is driven 
                    by a desire to master new skills, tackle complex challenges, and stay updated with the latest 
                    advancements in the field. I am always eager to learn, grow, and apply innovative solutions to 
                    real-world problems. With a foundation in coding and a commitment to refining my abilities, I’m 
                    excited to contribute to impactful projects and collaborate with others in the tech community.</p>
                <p>In addition to my technical curiosity, I thrive in environments that encourage collaboration and
                     creative problem-solving. I enjoy working on projects that challenge my thinking and push me to 
                     explore new approaches. As I continue to grow in my software development career, I am particularly
                      interested in areas such as web development, software architecture, and emerging technologies. I'm
                       committed to developing solutions that not only meet user needs but also improve efficiency and 
                       scalability. I believe that with the right mindset and perseverance, there’s always room for 
                       innovation and improvement.</p>

                       <h2>Skills</h2>
                <div class="cont-wrap d-flex flex-row justify-content-center">
                    <div class="wrap d-flex flex-row justify-content-center gap-4 flex-wrap">
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

            <div v-else class="row">
                <Spinner />
            </div>
        </div>


    </div>
</template>

<script setup>
  
  import {computed, onMounted } from 'vue'
  import {useStore} from 'vuex'
  import Spinner from '@/components/Spinner.vue'
  import Card from '@/components/Card.vue'


    const about = computed(() => store.state.about)
    const skills = computed(() => store.state.skills )
    const store = useStore()

  
    onMounted(() => {
        store.dispatch('fetchAbout')
        store.dispatch('fetchSkills')
      })

  

  
</script>

<style scoped>
    
    [about]{
        background-image: url("https://chelsea-julie.github.io/all-images/images/Brown Grey Creative Modern Online Portfolio/4.png");
        background-size: cover;
        background-repeat: no-repeat;
        padding-inline: 5rem;
        padding-top: 5rem;
        
    }

    .row{
        
    }
    img{
        border-radius: 5rem;
    }
    
    h1{
        color: aliceblue;
        padding-bottom: 0;
    }

    p{
        font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 50rem;
        font-style: normal;
        color: aliceblue;

    }

    .container {
        min-height: 100vh; 
        text-align: center;
    }

    img{
        max-width: 27rem;
        height: auto;
        border-radius: 0;
    }

    /*
    *  STYLE 1
    */

    header
{
	font-family: 'Lobster', cursive;
	text-align: center;
	font-size: 25px;	
}

#info
{
	font-size: 18px;
	color: #555;
	text-align: center;
	margin-bottom: 25px;
}

a{
	color: #074E8C;
}

.scrollbar
{
	margin-left: 30px;
	float: left;
	height: 300px;
	width: 85%;
	background: #f5f5f500;
	margin-bottom: 25px;
    overflow-x: scroll;

}

.force-overflow
{
	min-height: 450px;
}

#wrapper
{
	text-align: center;
	width: 500px;
	margin: auto;
}

/*
 *  STYLE 1
 */

.row ::-webkit-scrollbar{
    display: block !important;
}

#style-1::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #f3e2d6;
}

    /* .cont-wrap{
        display: flex;
        justify-content: center;
    } */

    .wrap{
        width: 80%;
        align-self: center;
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