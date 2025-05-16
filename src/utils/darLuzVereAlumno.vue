<template>
		<div>
			<label for="usr"></label>
			<input v-model="username"   type="text" required>
		</div>
		
		<div>
		    <label for="pwd"></label>
			<input  v-model="password" type="password" required>
		</div>

			<div>
			 <label for="role">Tipo de Usuario</label>
			    <select v-model="choseRole">
		 			 <option value="studying">Alumno</option>
		 			 <option value="teaching">Profesor</option>
		 		</select>
	 		    <!-- control directo de sesiones -->
	 		  <button @click="loginRoller"></button>
				
			</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	import {useRouter } from 'vue-router'

    const username = ref('');
    const password = ref('');
    const choseRole = ref('');

    const router = useRouter();

  

	function loginRoller(){

		if(username.value && password.value && choseRole.value){
			   localStorage.setItem('userRole',choseRole.value);
				if(choseRole.value === 'studying')  router.push('/alumnos')
                 if(choseRole.value === 'teaching')  router.push('/profesores') 

		}else{
			 	  alert('Por favor completa Ambos Campos');
				}
	}
		
	// onMounted(()=>{
    //   loginRoller();
	// })
	
	/*
	const userRole = ref('');
	loginRoller(){	
		if(this.selectedRole){
			 localStorage.setItem('usoRol', selectedRole.value)
			 this.router.push('/loggearse') //redireccion al loggeo de Alumnos
		} else {
			 alert('Elige un rol para Ingresar a la Sesión Predeterminada')
		}
	}*/

</script>