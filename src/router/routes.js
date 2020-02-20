import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/neu',
    name: 'neu-cards',
    component: () => import(/* webpackChunkName: "admin" */ '@/views/NeuCards.vue'),
    meta: {
      requiresAuth: true
    }
  },

]

export default routes