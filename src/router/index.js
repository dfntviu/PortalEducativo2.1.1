  
   // Habilitar unicamente cuando se tenga muy bien dominado la sesion de roles en vue
   //Pag Inicial del Portal Web Educativo (de Ingenieria)
   import HomePEducativoView from '../Alumnos/views/HomeView.vue';  
   // import ContactarseFIView from '/src/informationContact.vue'; [not enable] 

    import { createRouter, createWebHistory } from 'vue-router';
    // prueba # 2 - Se aniadieron 2 scripts 1 para el Login
  import store from '../Store/indexs.js'
  import LoginViewGn from '@/LogIns/LoginViewGn.vue';

  // Inicios de Sesión y Geometria de la Barra de Navegación
   import Principal from '/src/selectLoginView.vue';
  // import loginTeachers from '@/Profesores/views/loginTeachers.vue'
  import alumnosLayout from '@/Layouts/alumnosLayout.vue';
  import profesoresLayout from '@/Layouts/profesoresLayout.vue';

   // Alumnos & Profesores
  import FormularioRegisterView from '@/Alumnos/views/FormularioRegisterView.vue';
  import loadMaterial2View from '@/Alumnos/views/loadMaterial2View.vue';
  import RevisarMaterial2View from '@/Alumnos/views/RevisarMaterial2View.vue';
  import areaNotificacionesView from '@/Alumnos/views/areaNotificacionesView.vue';
  import ProfileAlumnos from '@/Alumnos/views/profileAlumnsView.vue';  //agregado recientemente #_1
  import faqAlumnoView  from '@/Alumnos/views/faqAlumnoView.vue';
  import LogoutView  from '@/Alumnos/views/LogoutView.vue';
  import WelcomeMsg from '@/Alumnos/views/welcomeAlumnosView.vue';  // #Agregado rec'e 25/05/11

  import registerTeacherView from '@/Profesores/views/registerTeachersView.vue';
  import profileTeacherView from '@/Profesores/views/profileTeacherView.vue';
  import administrarAlumsView from '@/Profesores/views/administrarAlumsView.vue';
  import moderarAlumnosView from '@/Panels/revPanelMatEduc.vue';    //agregado recientemente #_2
  import carruselDeAportesView from '@/Profesores/views/carruselDeAportesView.vue';
  import faqProfesorView from '@/Profesores/faqProfesorView.vue';
  import logOutProfessorView from '@/Profesores/views/logOutProfessorView.vue';
  import majesticMsgProf from '@/Profesores/views/welcomeMajProfesoresView.vue';   //agregado recientemente #_3

  import AboutView  from '/src/AboutView.vue';


  const routes = [
       // {path: '/about', name: 'about', component AboutView}, 

    // debera asignarse un principal(podria decirse), pq lo vincule y renderice
     { path: '/', name: 'Login', component: LoginViewGn},  // #En lugar de ambos logins: 158,159(alum,prof)   


    { path: '/Layout1', name: 'alumnos-Layout', component: alumnosLayout },
    { path: '/Layout2', name: 'profesores-Layout', component: profesoresLayout},

    {
      path: '/alumnos',
      // component: alumnosLayout,  # Se quita el Layout, existira duplicidad. Ya esta iniciado -> [App.vue]
      meta: { permission: ['alumno'] },   // me permite la navegacion por permiso, se apoya del State de vuex
      // meta: { role: 'alumno' }, // #Es necesario loggearse para acceder
      children: [
        { path:'/about', component: AboutView},
        { path: '/formulario_reg', name:'FormAlumno', component: FormularioRegisterView },
        { path: '/load_material', name: 'cargaMaterial', component: loadMaterial2View },
        { path: '/rev_material', component: RevisarMaterial2View },
        { path:  '/profile_alumnos', component:  ProfileAlumnos},  //agregado recientemente
        { path: '/area_notify', component: areaNotificacionesView},
        { path:  '/faq_alumno', component: faqAlumnoView },
        { path:  '/loggout_alumno', component: LogoutView },
        { path: '/welcome_alumno', component: WelcomeMsg},  // #Agregado rec'e 25/05/11 >> (Animar Alumnos)
      ]
    },

    {
      path: '/profesores',
      // component: profesoresLayout,
      meta: { permission: ['profesor'] },  // #Es necesario loggearse para acceder x2
      // meta: { role: 'profesor' },  
      children: [  
        { path: '/home', name: 'home', component: HomePEducativoView },
        { path: '/register-teach', component: registerTeacherView },
        { path:  '/profiles-teach', component: profileTeacherView },
        { path: '/control_alum-teach', component: administrarAlumsView },
        { path: '/moderar-mat_educative', component: moderarAlumnosView }, //agregado recientemente #_2
        { path: '/aportes_carr-teach', component: carruselDeAportesView },
        { path: '/faq_profesor-teach', component: faqProfesorView },
        { path: '/logout-teacher', component: logOutProfessorView  },
        { path: '/welcome_profesor', component: majesticMsgProf},  // #Agregado rec'e 25/05/11 >> (Animar Profesor)
      ] 
    },
     // #todo lo que no pertenezca a cualquier rol de sesión, podra acceder desde la Bar. de Direcciones
      // { path: '/contactanos', name:'contactanos', component: ContactarseFIView #enab with solution margin} 
  ];

  const router = createRouter({ 
       // Nunca tocar la linea de history  (es main interprete ruteo)
     history: createWebHistory(process.env.BASE_URL),
    routes
  })

  // Control de acceso  por rol
    router.beforeEach((to,from,next)=>{
      const {isAuthenticated,role } = store.state;

     /*const userRole = localStorage.getItem('userRole');*/
       if(to.meta.permission){
          if (!isAuthenticated) {  
              return next('/');  
          }
          if(!to.meta.permission.includes(role)){  //# Olvide la negación(import), siempre que el rol sea correcto se saldria
                return next('/');  
          }
       }
        next();
    }); 

     // es posible switchear entre rutas prev. integradas, no se recomienda utilizar con +2 roles de sesion 

export default router