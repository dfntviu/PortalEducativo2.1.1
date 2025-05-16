// import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Alumnos/views/HomeView.vue'  //nunca tocar está linea
  

/*const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',*/
    //route level code-splitting
    //this generates a separate chunk (about.[hash].js) for this route
    //which is lazy-loaded when the route is visited.
    /*component: () => import( webpackChunkName: "about"  '/src/AboutView.vue')
   },*/
  
  /*{  "[descomentar hasta haber hecho el utimo intento]"
    path: '/formulario-register',
    name:  'formulario-register',
    component: ()=> import('../Alumnos/views/FormularioRegisterView.vue')
  },

  {
    name:  'carruseles-publicados',
    path: '/carruseles-publicados',
    component: ()=> import('../Profesores/views/carruselDeAportesView.vue')
  },
  
  {
    name: 'carga-material-educ2',
    path: '/carga-material-educ2',
    component: ()=> import('../Alumnos/views/loadMaterial2View.vue')
  },
 
  {
    name: 'rev-material-educ2',
    path: '/rev-material-educ2',
    component: ()=> import('../Alumnos/views/RevisarMaterial2View.vue')
  },
  
  {
    name: 'ar-notificaciones-pub', 
    path: '/ar-notificaciones-pub',
    component: ()=> import('../Alumnos/views/areaNotificacionesView.vue')
  },
  {
    name: 'loggearse', 
    path: '/loggearse',
    component: ()=> import('../Alumnos/views/LoginView.vue')
  },
  {
    name: 'loggout',
    path: '/loggout',
    component: ()=> import('../Alumnos/views/LogoutView.vue')
  },
  {
    name: 'register-alumnos',
    path: '/register-alumnos',
    component: ()=> import('../Profesores/views/registerAlumsView.vue')
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
    component: ()=> import('../Alumnos/views/profileAlumnsView.vue')
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
    component:()=> import('../Alumnos/views/faqAlumnoView.vue')
   },
   {
    name: 'contact-page',
    path: '/contact-page',
    component: ()=> import('/src/informationContact.vue')
   } */
   /*{  comentaron por q son inonsistentes en su lugar ...-educ2
    name: 'rev-material-educ',
    path: '/rev-material-educ',
    component: ()=> import('../views/RevisarMaterialView.vue')
  },
  
  {
    name: 'carga-material-educ',
    path: '/carga-material-educ',
    component: ()=> import('../views/loadMaterialView.vue')
  },
];*/
   

   // Habilitar unicamente cuando se tenga muy bien dominado la sesion de roles en vue
   // Alumnos & Profesores

    import { createRouter, createWebHistory } from 'vue-router';
    
  // import LoginView from '@/Alumnos/views/LoginView.vue'; 
   import selectLoginView from '/src/selectLoginView.vue'; //en lugar de 130,132
  import loginTeachers from '@/Profesores/views/loginTeachers.vue'; 
  import alumnosLayout from '@/Layouts/alumnosLayout.vue';  //# erno # 1:  descomentar
  import profesoresLayout from '@/Layouts/profesoresLayout.vue';

  import FormularioRegisterView from '@/Alumnos/views/FormularioRegisterView.vue';
  import loadMaterial2View from '@/Alumnos/views/loadMaterial2View.vue';
  import RevisarMaterial2View from '@/Alumnos/views/RevisarMaterial2View.vue';
  import areaNotificacionesView from '@/Alumnos/views/areaNotificacionesView.vue';
  import faqAlumnoView  from '@/Alumnos/views/faqAlumnoView.vue';
  // import LogoutView  from '@/Alumnos/views/LogoutView.vue';

  import registerTeacherView from '@/Profesores/views/registerTeachersView.vue';
  import profileTeacherView from '@/Profesores/views/profileTeacherView.vue';
  import registerAlumsView from '@/Profesores/views/registerAlumsView.vue';
  import carruselDeAportesView from '@/Profesores/views/carruselDeAportesView.vue';
  import faqProfesorView from '@/Profesores/faqProfesorView.vue';

  // import AboutView  from '/src/AboutView.vue';


  const routes = [
       // {path: '/about', name: 'about', component AboutView}, 
    // vue router, busca la coincidencia p/vincular,  al no poseer componente vinculado gen one warning
     // { path: '/', redirect: '/alumnos'},    

    // debera asignarse un principal(podria decirse), pq lo vincule y renderice
    { path: '/', name: 'Login', component: selectLoginView},  // #En lugar de ambos logins: 158,159(alum,prof)   
    // { path:    '/login1', name: 'login-alumno',   component: LoginView },
    { path: '/login2', name: 'login-profesor', component: loginTeachers },

    { path: '/Layout1', name: 'alumnos-Layout', component: alumnosLayout },
    { path: '/Layout2', name: 'profesores-Layout', component: profesoresLayout},

    {
      path: '/alumnos',
      component: alumnosLayout,
      meta: { role: 'alumno' },
      children: [
        { path: 'formulario-reg', name:'FormAlumno', component: FormularioRegisterView },
        { path: 'load_material', name: 'cargaMaterial', component: loadMaterial2View },
        { path:  'rev_material', component: RevisarMaterial2View },
        { path: 'area_notify', component: areaNotificacionesView},
        { path:  'faq_alumno', component: faqAlumnoView },
        // { path:  'loggout_alumno', component: LogoutView }
      ]
    },

    {
      path: '/profesores',
      component: profesoresLayout,
      meta: { role: 'profesor' },
      children: [
        { path: 'register', component: registerTeacherView },
        { path:  'profile', component: profileTeacherView },
        { path: 'control-alum', component: registerAlumsView },
        { path: 'aportes-carr', component: carruselDeAportesView },
        { path: 'faq_profesor', component: faqProfesorView },
      ]
    },

    
  ];

  const router = createRouter({ 
       // Nunca tocar la linea de history  (es main interprete ruteo)
     history: createWebHistory(process.env.BASE_URL),
    routes
  })

  // Control de acceso  por rol
    router.beforeEach((to,from,next)=>{
     const userRole = localStorage.getItem('userRole');
       if(to.meta.role && !to.meta.role.includes(userRole)){
               return next('/alumnos');  
       }
        next();
    }); 


  /*import FormularioRegisterView from '../views/FormularioRegisterView.vue';
  import RevisarMaterial2View from '../views/RevisarMaterial2View.vue';
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
  });     */
     // es posible switchear entre rutas prev. integradas, no se recomienda utilizar con +2 roles de sesion 


export default router