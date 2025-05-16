<template>
		<div class="cont-logout">
			<h2 class="title">Cerrar Sesión</h2>
			<p class="mensaje advertencia">Procesando el Cierre de Sesión, por favor espere...</p>
			<p class="gravamen">Es importante recordar, Al Salir  la información se perderá</p>
		</div>
</template>

<script setup>
	import { onMounted } from 'vue';
	import  {useRouter} from 'vue-router';
	import { useStore } from 'vuex';

	const router = useRouter();
	const store = useStore();


	async function registrarCierreSesion() {

		try{
	
			const log = {
				 tipoUsuario: 'profesor',
				 horaCierre: new Date().toISOString(),
	
				   	detalles:{
				   		accion: 'logout',
				   		origen: window.location.pathname,
				   	}
			};
	
			// Cuando haya sido conectado el servicio a FBaseStorage
			await fetch('/api/FBaseStge/cierre-session',{
				method: 'POST',
				headers: {'Content-Type': 'application/JSON'},
				body: JSON.stringnify(log),
			});

			router.push('/about')
			console.log('El cierre de sesión, ha sido registrado Correctamente');
		}catch(error){
			console.warn('Lo sentimos, No fue posible registrar el cierre de SESIÓN');
		}
	}


	// montamos el servico de logOut para el rol de Sesión Profesor
	  onMounted(() => {
	  	console.log('Profesor cerrando sesión. Redirigiendo al Login del Profesor');

	  	 // Simular los procesos Intermedios
	  	 if(typeof window.cancelLogOut === 'function'){
	  	 	  	 	window.cancelLogOut();
	  	 }

	  	 	// El cierre de Sesión fue invocado
	  	  registrarCierreSesion();

	  	 // Limpiamos la memoria del Navegador. (información perdida)
	  	   localStorage.clear();
	  	   // sessionStorage().clear();  En caso de haberlo usado

	  	   // simulamos el cierre de sesion, con TimeOut
	  	   setTimeout(()=>{
	  	   	  // router.push('/');
	  	   	  handleCleanOut();
	  	   }, 1900); // 2 decimas de segundo adicionales, 
	  });

	  const handleCleanOut = async()=>  {
	  	await store.dispatch('logout');
	  	 router.push('/');
	  }
</script>
	
<style>
	.title {
	  font-size: 2rem;
	  color: #333;
	}		
	.mensaje{
	  font-size: 1.1rem;
	  color: #666;
	  margin-top: 1rem;
	}
	.advertencia{
		 color: #d35400;
		 font-weight: bold;
	}
	.gravamen{
		color: crimson;
		font-weight: bold;
		margin: 1.5px 2.5px;
	}
	/*Animar el cierre de Sesión*/
	 @keyframes spin {
	 	  0%{ transform:rotate(0deg); }
	 	100%{transform:rotate(360deg);}
	 }	
</style>