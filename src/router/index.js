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
    //route level code-splitting
    //this generates a separate chunk (about.[hash].js) for this route
    //which is lazy-loaded when the route is visited.
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
    name: 'profile-teacher',
    path: '/profile-teacher',
    component: ()=> import('../Profesores/views/profileTeacherView.vue')
  },
   {
    name: 'profile-alums',
    path: '/profile-alums',
    component: ()=> import('../views/profileAlumnsView.vue')
   },
   {  
    name: 'pnls-pnl-puntuar-material',
    path: '/pnls-pnl-puntuar-material',
    component: ()=> import('../Panels/revPanelMatEduc.vue')
   },
   // Rol de Profesores
   {
     name: 'loggearse-profesores',
     path: '/loggearse-profesores',
     component: ()=> import('../Profesores/views/loginTeachers.vue')
   },
   // new_02-Mayo
   {
    name: 'faq-profesores', 
    path: '/faq-profesores',
    component:()=> import('../Profesores/faqProfesorView.vue')
   },
   {
    name: 'faq-alumnos', 
    path: '/faq-alumnos',
    component:()=> import('../views/faqAlumnoView.vue')
   },
   {
    name: 'contact-page',
    path: '/contact-page',
    component: ()=> import('../informationContact.vue')
   }
   /*{  comentaron por q son inonsistentes en su lugar ...-educ2
    name: 'rev-material-educ',
    path: '/rev-material-educ',
    component: ()=> import('../views/RevisarMaterialView.vue')
  },
  
  {
    name: 'carga-material-educ',
    path: '/carga-material-educ',
    component: ()=> import('../views/loadMaterialView.vue')
  },*/
];
   

  const router = createRouter({ 
       // Nunca tocar la linea de history  (es main interprete ruteo)
     history: createWebHistory(process.env.BASE_URL),
    routes
   }) 
   /* Habilitar unicamente cuando se tenga muy bien dominado la sesion de roles en vue
   // Alumnos & Profesores
  import FormularioRegisterView from '../views/FormularioRegisterView.vue';
  import RevisarMaterial2View from '../views/RevisarMaterial2View.vue';
  import registerTeachersView from '../Profesores/views/registerTeachersView.vue';
  import profileTeacherView from '../Profesores/views/profileTeacherView.vue';

  { path: '/formulario-register', component: FormularioRegisterView },
  { path: '/rev-material-educ2',   component: RevisarMaterial2View, meta:{ roles:['study']}},
  { path: '/reg-teachs', component: registerTeachersView, meta:{ roles:['teach']}},
  { path: '/profile-teacher',  component: profileTeacherView, meta:{ roles:['teach']}},
  //{ path: '/register-alumnos', component: registerAlumsView, meta:{ roles:['study']}},


const router = createRouter({
  history: createWebHistory(),
  routes
});
   // Protección de Rutas por rol
  router.beforeEach((to,from,next)=>{
   const userRole = localStorage.getItem('userRole');
     if(to.meta.roles && !to.meta.roles.includes(userRole)){
             return next('/profile-teacher');  
     }
      next();
  }); 
     // es posible switchear entre rutas prev. integradas, no se recomienda utilizar con +2 roles de sesion 
  */

export default router