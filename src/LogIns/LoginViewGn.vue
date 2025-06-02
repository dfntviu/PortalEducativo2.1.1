<template>
	<div>
		 <h2 class="title">Iniciar Sesión</h2>
		<input v-model="username"  placeholder="Ingrese el Usuario  de su TIPO de Usuario" type="text" required>
		<input  v-model="password" placeholder="Ingresa la password  de su TIPO de Usuario " type="password" required>
			<button @click="handleLogin">Entrar</button>
		<p  class="msg_validation" v-if="errorMsg"> {{errorMsg}}</p>
		<!-- <p class="msg_satisfaction" v-else-if="godEntryMsg"> {{godEntryMsg}} </p> -->
	</div>
</template>


<script >
	import { useStore } from 'vuex';
	import { ref, nextTick} from 'vue';  //aqui esta la clave del exito papa p1
	import { useRouter } from 'vue-router';
	// import { nextTick } from vue;


	export default{
		setup(){
			const store = useStore();
			const router  = useRouter();
			const username  =  ref('');
			const password = ref('');
			const errorMsg = ref('');
			// const godEntryMsg = ref('');


			const handleLogin = async()=> {
				try{
					await store.dispatch('login', 
						{     usuario: username.value, 
						  contrasenia: password.value
						});
						/** aqui esta la clave del exito papa p2, esto rompia todo el estado no le daba
					un chance y cuando queria actualizar nunca ing. al if necesitaba actualizar el estado y posterior el DOM  **/
					await nextTick();  //espera que el DOM y el estado reaccionen

					if(store.state.role === 'alumno' ){
						/* godEntryMsg.value = 'Acceso Permitido, Exitosamente';*/
						router.push('/alumno')
					}else if(store.state.role === 'profesor'){
						 router.push('/profesor')
					} else {
						errorMsg.value = 'El Rol no ha sido reconocido';
					}

				}catch(error){
					errorMsg.value = 'Credenciales incorrectas';
					console.error('[handleLogin] Error en login ', error);
				}
			};
					/* aniadir el Estado de satisfaccion al contral desde  su mutacion*/
			return {username, password, handleLogin,errorMsg};
			
			/*const handleCleanOut = async()=>{
				console.warning('Contruyendo Limpieza de Sesión');
				// validar que sesion del componente NavegacionProfesores o NavegacionAlumno, corresponde

				// Limpiar dicho componente

				// Mostrar interacción limpia
			}*/
		},
	};
</script>

<style scoped>
	.title{
		text-align: center;   	    /*new_1*/
		text-transform: capitalize; /*new_2*/
  	  	margin: 19px auto;
  	  	background-color: #d4f7;
  	  	border-radius: 3px 2px 4px;
  	  	max-width: 942.6px;  
  	  }
  	  input{
  		/*	padding: 10px; margin: 10px 0;  font-size: 14px;*/
  		  padding: 8px;
	  			margin: 13px auto;
	  			width: 295px;
	  			display: flex;
  		}

  		 button{
  		    padding: 10px 15px;
		    margin-top: 15px;
		    background-color: #0077cc;
		    color: white;
		    border: none;
		    border-radius: 6px;
		    cursor: pointer;
		    font-size: 16px;   
		    font-weight: 500;   
		    width: 72%;
		    transition: background-color 0.3s ease;
  			width: 136px;
			display: block;
    	  margin-left: auto;
    	  margin-right: auto;
  		}

  		.msg_validation{
          color: #d31400;
		 font-weight: bold;
  		  font-size: 1.1rem;
	      margin-top: 1rem;
	      text-align: center;
  		}

  		.msg_satisfaction{
  		  color: #228B22;  /*ForestGreen*/
		  font-weight: bold;
  		   font-size: 1.1rem;
	      margin-top: 1rem;
	      text-align: center;
  		}

</style>