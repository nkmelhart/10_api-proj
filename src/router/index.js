import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Api1 from '../views/Api1.vue'
import Api2 from '../views/Api2.vue'
import Api3 from '../views/Api3.vue'
import Details from '../views/Details.vue'
import {cleanGif, getGif} from '../helpers/useGifs'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Api1',
    name: 'Api1',
    component: Api1
  },
  {
    path: '/Api2',
    name: 'Api2',
    component: Api2
  },
  {
    path: '/Api3',
    name: 'Api3',
    component: Api3
  },
  {
    path: '/:id',
    name: 'Details',
    component: Details,
    beforeEnter: (to, from) => {
      cleanGif()
      getGif(to.params.id)
      return true
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
