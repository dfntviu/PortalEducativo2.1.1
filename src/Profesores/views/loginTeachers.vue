<template>
	<div>
		 <h1>Iniciar Sesión | Profesor</h1>
		  <input type="text" v-model="username" placeholder="E-mail Institucional del Profesor">
		  <input type="password" v-model="password" placeholder="Contraeña">
		  <button @click="iniciarSesion">Firmarse</button>

		<div v-if="errorMessage" class="erno-msg">
			  {{errorMessage}}
		</div>
	</div>
</template>

<script setup>
	 import { ref }from 'vue';
	 import { useRouter } from "vue-router";
	 import  { validarCredencialesProfesor } from "@/api/authTeachers.js";

	 	const router = useRouter();
    const username  = ref('');
 	const password  = ref('');
 	const errorMessage = ref('');

	const iniciarSesion = async () =>{
		   try{
		      // Validamos la sesion y no el registro del Alumno -> registerAlumnsView.js, Mediante un JSON de sesiones de profesor
		 	 	const respuesta  = await validarCredencialesProfesor({
		 	 		username: username.value,
		 	 		password: password.value,
		 	 	});
		 		console.log('El Acceso fue Autorizado');
		 		// Efectua la redireccion, al perfil del profesor
		 		router.push('/reg-teachs');
		 }catch(error){
				errorMessage.value = error.message;
		 }

};
</script>

<style scoped>
	.error-message {
	  color: red;
	}
</style>