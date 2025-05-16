<template>
	<div>
		<NavegacionProfesores/>
		<router-view/>
	</div>
</template>
<script>
	 import NavegacionProfesores from '@/components/NavegacionProfesores.vue';

	 export default{
	 	components: {NavegacionProfesores}
	 };
	/* Se deberá Modificar el script principal-js[router.js].  Usar la herencia para c/usuario de sesion en el    ruteo. Colocaré el code
	   correspondiente como comentario, pues muy posiblemente podria perdir los vinculos
	   relacionados a las vistas - alumnos y profesores -vistas, el modelo GPT 4, podria generar error
	   en el servidor. Por está razón tendré una copia here. */

	/* import LoginView from '@views/LoginView.vue';
	 import AlumnoLayout from '@layouts/AlumnoLayout.vue';
	 import ProfesorLayout from '@layouts/ProfesorLayout.vue';

	 import SubirContenido from '@/views/SubirContenidoView.vue'
	 import RevContenido from '@views/RevContenidoView.vue';
	 import RegProfesor from '@Profesores/views/RegProfesorView.vue';
	 import RevMaterial from '@Profesores/views/RevMaterialView.vue';

	 const routes = [
	 		 {path: '/', name: 'Login', component: LoginView },

	 		 {path: '/alumnos',
	 		  component: AlumnoLayout,
  			  meta: { role: 'alumno'},
  			        children: [
  			     		{ path:  'subir',  component: SubirContenido },
  			     		{ path: 'revisar', component: RevContenido },
  			     		{ path: 'publicaciones', component: Publicaciones },
  			     		{ path: 'notificaciones', component: AreaNotificaciones }
  			        ]
	 		 },
	 		 {
	 		 	path: '/profesores',
	 		 	component: ProfesorLayout,
	 		 	  meta: {role: 'profesor' },
	 		 	    children: [
	 		 	    	{ path: 'registrar', component: RegProfesor },
	 		 	    	{ path: 'perfil', component: RegisterTeacher },
	 		 	    	{ path: 'revpanel-mateduc', component: RevPanelMatEduc},
	 		 	    	{ path: 'logout', component: LogOutProfesor }
	 		 	    ]
	 		 }

	 		 > Debera restructurarse el Directorio del Proyecto de la Siguiente manera:

	 		 ├── src/
	 		 |	 ├── components/
	 		 |	 |   ├── NavegacionAlumno.vue
	 		 |	 |   ├── NavegacionProfesor.vue
	 		 |   |   ├── views/
	 		 |   |       ├── LoginView.vue
	 		 |   |       ├── alumnos/
	 		 |   |       |    ├── SubirContenidoView.vue
	 		 |	 |       |    ├── RevContenidoView.vue
	 		 |	 |       └── profesores/
	 		 |	 |		     ├── RegProfesorView.vue
	 		 |   |           └── RevMaterialView.vue
	 		 |   └──  router/
	 		 |   |    └── index.js
	 		 |   └── App.vue
	 		 |   └── main.js 

	 		  > Finalmente, se agregarán los layouts para diferente Incio de Sesion:

			  ├── layouts/
			  |    ├── AlumnoLayout.vue
			  |    └── ProfesorLayout.vue
	 	];*/		 
</script>