import Login from '@/views/login/Login.vue'
import Pedidos from '@/views/pedidos/Pedidos.vue'
import Registrar from '@/views/registrar/Registrar.vue'
import Unidades from '@/views/unidades/Unidades.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: ()=> import("@/layouts/PublicLayout.vue"),
      children: [
        {path: "", component: () => import("@/views/home/Home.vue")},
        {path: "login", component: () => import("@/views/login/Login.vue")},
        {path: "register", component: () => import("@/views/registrar/Registrar.vue")}
      ]
    },
    {
      path: "/app",
      component: () => import("@/layouts/AppLayout.vue"),
      children: [
        {path: "", component: () => import("@/views/fazer_pedido/FazerPedido.vue")},
        {path: "unidades", component: () => import("@/views/unidades/Unidades.vue")},
        {path: "meus_pedidos", component: () => import("@/views/meus_pedidos/MeusPedidos.vue")}
      ]
    },
    {
      path: "/admin",
      component: () => import("@/layouts/AdminLayout.vue"),
      children: [
        {path: "", component: () => import("@/views/pedidos/Pedidos.vue")}
      ]
    }
  ],
})

export default router
