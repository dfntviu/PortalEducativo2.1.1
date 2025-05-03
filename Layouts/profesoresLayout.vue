<template>
	<div>
		<NavegacionProfesores/>
		<router-view/>
	</div>
</template>
<script>
	 import NavegacionAlumno from '@/compontents/NavegacionProfesores.vue';

	 export default{
	 	components: {Navegacionrofesores}
	 };
	/* Se deberá Modificar el script principal-js[router.js].  Usar la herencia para c/usuario de sesion en el    ruteo. Colocaré el code
	   correspondiente como comentario, pues muy posiblemente podria perdir los vinculos
	   relacionados a las vistas - alumnos y profesores -vistas, el modelo GPT 4, podria alentarse o tener error
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
	 	];*/
</script>