<template>
	<div class="cont-logout">
		<h1 class="title">Cerrar Sesión</h1>
	</div>
</template>

<script setup>   
	// ahi ocurre toda la magia, increible eeepaaa
 	import  { onMounted } from 'vue';
	import { useRouter }  from	'vue-router';

	const router = useRouter();
		console.log('La sesión, está muy proxima a cerrarse espere, 1.7 segundos');

	onMounted(()=>{
		 //Espera 1.5 segundos p/mostrar el mensaje y redirigir
		setTimeout(()=>{   //elimina todos los registros del LStorage
		   localStorage.clear();   
			router.push('/loggearse'); 
		},1700);
	});

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
</style>