import { createStore } from 'vuex'
import axios from 'axios'
const portfolioURL = "https://chelsea-julie.github.io/vueEOMP/data"
import swal from 'sweetalert2/dist/sweetalert2'
export default createStore({
  state: {
    jobtitle:  null,
    about: null,
    education: null,
    experience: null,
    projects: null,
    testimonial: null,
    skills: null
  },
  getters: {
  },
  mutations: {
    setJobtitle(state, value) {
      state.jobtitle = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setExperience(state, value) {
      state.experience = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonial(state, value) {
      state.testimonial = value
    },
    setSkills(state, value) {
      state.skills = value
    }
  },
  actions: {

    async fetchJobtitle(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setJobtitle", res.jobTitle)
        console.log(res.jobTitle);
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchAbout(context) {
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", res.About)
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchEducation(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", res.education)
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchExperience(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setExperience", res.experience)
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchSkills(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", res.skills)
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchTestimonials(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonial", res.testimonials)
        console.log(res.testimonials);
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    },
    async fetchProjects(context) { 
      try {
        let res = await (await axios.get(portfolioURL)).data  
        // let {jobTitle} = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", res.projects)
        console.log(res.projects);
      } catch(e) {
      swal.fire ({
        title: "Error",
        text: "Unable  to fetch job title",
        icon: "error",
        timer: 2000,
      })
    }
    }
    },
  modules: {
  },

})
