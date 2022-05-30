import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/Page.vue'
import PageDetail from '../views/PageDetail'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pages',
    name: 'pages',
    component: PageView
  },
  {
    path: '/pages/:id',
    name: 'pages-detail',
    component: PageDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
