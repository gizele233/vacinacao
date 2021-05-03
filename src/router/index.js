import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../views/Home.vue'
import VerFormulario from '../../views/VerFormulario.vue'
import NotFound from '../../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/questionarios/:id',
    name: 'DetalheQuestionario',
    params: true,
    component: VerFormulario,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  
});

export default router
