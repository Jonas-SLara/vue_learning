import { createRouter } from "vue-router";
import About from "../views/About.vue";
import Pedidos from "../views/Pedidos.vue";
import { createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const routes = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/login', component: Login, name: 'Login' },
    {path: '/about', component: About, name: 'About'},
    {path: '/pedidos', component: Pedidos, name: 'Pedidos'},
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})