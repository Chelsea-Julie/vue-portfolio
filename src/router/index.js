import { createRouter, createWebHistory } from 'vue-router'

import LandindSection from '@/views/LandindSection.vue'
import EducationSection from '@/views/EducationSection.vue'
import ProjectsSection from '@/views/ProjectsSection.vue'
import ContactUs from '@/views/ContactUs.vue'
import AboutView from '../views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: LandindSection
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/resume',
    name: 'resume',
    component : EducationSection
  },
  {
    path: '/projects',
    name: 'projects',
    component : ProjectsSection
  },
  {
    path: '/contact',
    name: 'contact',
    component : ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
