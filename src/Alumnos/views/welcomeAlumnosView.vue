<template>
	<WelcomeMsg/>
	<div> <h2> <span>bienvendio:</span>{{alumnoActivo.nombre}}- {{alumnoActivo.apellido}}</h2></div>
	<div> <h2> <span>pertenciente a: </span> {{alumnoActivo.carrera}} </h2></div> 
	´<h2><span>Disfruta  Nuestro Servicio</span></h2>
	<!-- [Habilitar] cuando interpolemos con el fichero JSON personalizado p/c alumno -->
</template>

<script setup>
	import WelcomeMsg from '@/components/mensajeBienvenida.vue';
	import {reactive } from 'vue'

		// 1. Recuperar las credenciales de la Sesión inciada previamente
		  const email_usuario = localStorage.getItem('usuario_loggin')?.trim();
		 const listado_usuarios = JSON.parse(localStorage.getItem('alumnos-registrados'))||[];

		  // 2.  Buscar el Alumno que coincida con la Sesión Actual
	  	  const sesion_encontrada = listado_usuarios.find(alumno => alumno.email.trim() === email_usuario )

	  // 3. Desplegamso su estado reactivo que se profesor13@prof.instituto.mx interpolará como Mensaje de Bienvenida, de la Sesión del Alumno
	 const alumnoActivo = reactive({
	 	nombre: sesion_encontrada?.name || '',
	 	apellido: sesion_encontrada?.lnme || '',
	 	carrera: sesion_encontrada?.degree|| '' 
	 });
   
	
</script>