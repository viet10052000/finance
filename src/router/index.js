import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/Page.vue'
import PageDetail from '../views/PageDetail'
import Currency from '../views/Currency.vue'
import Sumary from '../views/Sumary.vue'
import BarChartLine from '../components/BarChartLine.vue'
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
  {
    path: '/sumary',
    name: 'sumary',
    component: Sumary
  },
  {
    path: '/currency',
    name: 'currency',
    component: Currency
  },
  {
    path: '/chart',
    name: 'chart',
    component: BarChartLine
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
