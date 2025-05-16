<template>
	<div class="cont-logout">
		<h1 class="title">Cerrar Sesión</h1>
		<div class="container">
		  <h3 class="succesfull-back">No se preocupe, Su Información ha sido guardada con ÉXITO, y no se perderá</h3>
		</div>
	</div>
</template>

<script setup>   
	// ahi ocurre toda la magia, increible eeepaaa
 	import  { onMounted } from 'vue';
	import { useRouter }  from	'vue-router';
	import  { useStore } from 'vuex'; //new_lib

	const router = useRouter();
	const store = useStore();  //new_var

		console.log('La sesión, está muy proxima a cerrarse espere, 2 minutos, 2 segundos');

	onMounted(()=>{
		 //Espera 1.5 segundos p/mostrar el mensaje y redirigir
		setTimeout(()=>{   //elimina todos los registros del LStorage
		     //localStorage.clear(); # NO DESHABILITAR, necesario llevar los datos a otra sesion, (hacer pruebas -> se puede habilitar)
		     handleCleanOut();
			// router.push('/');  # en su lugar, la f(n) de la ln. 27
		},2200);
	});

	const handleCleanOut = async()=>{
		console.warn('Cerrando Sesión Limpiamente...');
		  await store.dispatch('logout');  //new_using (the moment magic in happens here )
		  router.push('/'); 
	}

</script> 

<style scoped>
	.title{
		 margin: 40px auto;
		 text-align: center;
		 background-color: #f8d7da;
		 color: #721c24;
		 padding: 20px;
		 border-radius: 8px;
		 max-width: 600px;
	}
	/* Notificar al usuario resp'e datos*/
	.succesfull-back{
		color: #0b0;
		font-weight: bold;
	}

	.container{
		display: flex;
		justify-content: center;  /* horizontal*/
		align-items: center; /* vertical */
		height: 69vh;
	}
</style>