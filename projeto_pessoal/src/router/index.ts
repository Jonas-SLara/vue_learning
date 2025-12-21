import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Pedidos from '../views/Pedidos.vue'
import Registrar from '../views/Registrar.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/pedidos', component: Pedidos},
    {path: '/login', component: Login},
    {path: '/register', component: Registrar},
    {path: '/', component: Home}
  ],
})

export default router
