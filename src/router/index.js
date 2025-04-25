import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'  //nunca tocar está linea

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/formulario-register',
    name:  'formulario-register',
    component: ()=> import('../views/FormularioRegisterView.vue')
  },

  {
    name:  'carruseles-publicados',
    path: '/carruseles-publicados',
    component: ()=> import('../views/carruselDeAportesView.vue')
  },
  
  {
    name: 'carga-material-educ2',
    path: '/carga-material-educ2',
    component: ()=> import('../views/loadMaterial2View.vue')
  },
 
  {
    name: 'rev-material-educ2',
    path: '/rev-material-educ2',
    component: ()=> import('../views/RevisarMaterial2View.vue')
  },
  
  {
    name: 'ar-notificaciones-pub', 
    path: '/ar-notificaciones-pub',
    component: ()=> import('../views/areaNotificacionesView.vue')
  },
  {
    name: 'loggearse', 
    path: '/loggearse',
    component: ()=> import('../views/LoginView.vue')
  },
  {
    name: 'loggout',
    path: '/loggout',
    component: ()=> import('../views/LogoutView.vue')
  },
  {
    name: 'register-alumnos',
    path: '/register-alumnos',
    component: ()=> import('../views/registerAlumsView.vue')
  },
  {
    name: 'form-email',
    path: '/form-email',
    component: ()=> import('../utils/metConvertEmailView.vue')
  },
   {
    name: 'reg-teachs',
    path: '/reg-teachs',
    component: ()=> import('../Profesores/views/registerTeachersView.vue')
  },
   {
    name: 'profile-alums',
    path: '/profile-alums',
    component: ()=> import('../views/profileAlumnsView.vue')
   },
   /*{
    name: 'rev-material-educ',
    path: '/rev-material-educ',
    component: ()=> import('../views/RevisarMaterialView.vue')
  },*/
  
  /*{
    name: 'carga-material-educ',
    path: '/carga-material-educ',
    component: ()=> import('../views/loadMaterialView.vue')
  },*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router