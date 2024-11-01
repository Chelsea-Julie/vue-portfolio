<template>
    <div class="container-fluid" id="resume">
      <div class="container min-vh-100 d-flex flex-row align-items-center">
        <div class="row">
          <h1 class="pb-2">My education</h1>
          <div class="col-lg-12">
            <div class="horizontal-timeline">
              <ul class="list-inline items">

                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">October 2023</div>
                    <h5 class="pt-2">High school</h5>
                    <p class="text-muted">I matriculated from Mondale High School with a bachelor's pass. I focused on Computer Applications Technology (CAT) and Coding, which sparked my passion for technology. These subjects provided me with essential skills in problem-solving and critical thinking, preparing me for future challenges and opportunities.</p>
                   
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">April 2023</div>
                    <h5 class="pt-2">Life Choices Academy</h5>
                    <p class="text-muted">I studied at Life Choices Academy for six months, where I focused on web development. During this time, I engaged in various projects that allowed me to apply my skills in real-world scenarios. This experience not only enhanced my technical abilities but also deepened my passion for creating innovative solutions.</p>
                   
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">October 2024</div>
                    <h5 class="pt-2">AWS Skills center</h5>
                    <p class="text-muted">I recently attended a two-week cloud practitioner workshop with AWS, where I learned the fundamentals of cloud computing. The workshop covered essential topics and best practices, enhancing my understanding of cloud technologies and inspiring me to explore advanced concepts in the field.</p>
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h1 class="pb-2">My Experience</h1>
          <div class="col-lg-12">
            <div class="horizontal-timeline">
              <ul class="list-inline items">

                <li class="list-inline-item items-list ">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">July 2022</div>
                    <h5 class="pt-2">Soup kitchen</h5>
                    <p class="text-muted">In July 2022, I volunteered at a soup kitchen in Lentegeur, Mitchells Plain. I helped prepare and serve meals to those in need, ensuring that everyone was treated with kindness and respect. It was a rewarding experience that allowed me to positively impact my community and connect with others.</p>
                   
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">January 2024</div>
                    <h5 class="pt-2">Bella's guardian angels</h5>
                    <p class="text-muted">I volunteered at Bella's Guardian Angels, an animal rescue organization dedicated to saving and rehabilitating animals. My role involved caring for the animals and assisting with adoption events. This experience deepened my love for animals and highlighted the importance of compassion in their care.</p>
                
                  </div>
                </li>
                <li class="list-inline-item items-list">
                  <div class="px-4 text-white">
                    <div class="event-date badge bg-body">September 2024</div>
                    <h5 class="pt-2">LC Studios</h5>
                    <p class="text-muted">As an intern at LC Studios, I am embarking on an enriching learning journey in cybersecurity. This opportunity allows me to delve into various aspects of the field, including threat analysis, risk management, and network security. I’m gaining essential skills to protect digital assets and contribute to projects.
                    </p>
                   
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
// import { computed } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore();
// const education = computed(() => store.state.education);
// const experience = computed(() => store.state.experience);
// console.log(education);
</script>
<style scoped>
    /* General styling */
    .container {
        background-color: ;
    }
    .horizontal-timeline .items {
      border-top: 3px solid #FFFFFF;

    }
    .horizontal-timeline .items .items-list {
      display: block;
      position: relative;
      text-align: center;
      padding-top: 70px;
      margin-right: 0;
      color: #a68476;
    }
    li{
      background-color: #a68476;
    }
    .horizontal-timeline .items .items-list:before {
      content: "";
      position: absolute;
      height: 36px;
      border-right: 2px dashed #FFFFFF;
      top: 0;
      
    }
    .horizontal-timeline .items .items-list .event-date {
      position: absolute;
      top: 36px;
      left: 0;
      right: 0;
      width: 75px;
      margin: 0 auto;
      font-size: 0.9rem;
      padding-top: 8px;
      background-color: #a68476;
      color: #000000;
    }
    @media (min-width: 1140px) {
      .horizontal-timeline .items .items-list {
        display: inline-block;
        width: 24%;
        padding-top: 45px;
      }
      .horizontal-timeline .items .items-list .event-date {
        top: -40px;
      }
    }
    h1{
      color: #FFFFFF;
      text-align: center;
    }

    .pb-2{
        padding-bottom: 3rem !important;
    }

    .event-date{
        min-width: 10rem;
    }

    ul li{
        margin-inline: 5rem;
    }
   
    p{
        font-family: "Playfair Display", serif;
        font-optical-sizing: auto;
        font-weight: 50rem;
        font-style: normal;
        color: aliceblue !important;

}  


.row{
    padding-top: 5rem;
}


    

</style>




