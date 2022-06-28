import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/Login";
import Register from "@/views/login/Register";
import Home from "@/views/home/Home";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register.html',
    name: 'Register',
    component: Register

  }
  ,
  {
    path: '/home.html',
    name: 'Home',
    component: Home

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
