import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '../views/Page.vue'
import PageDetail from '../views/PageDetail'
import Currency from '../views/Currency.vue'
import Summary from '../views/Sumary.vue'
import CryptoCurrency from '../views/CryptoCurrency'
import Finance from '../views/Finance'
import Binance from '../views/Binance'
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
    path: '/summary',
    name: 'summary',
    component: Summary
  },
  {
    path: '/currency',
    name: 'currency',
    component: Currency
  },
  {
    path: '/cryptocurrency',
    name: 'cryptocurrency',
    component: CryptoCurrency
  },
  {
    path: '/finance',
    name: 'finance',
    component: Finance
  },
  {
    path: '/binance',
    name: 'binance',
    component: Binance
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
