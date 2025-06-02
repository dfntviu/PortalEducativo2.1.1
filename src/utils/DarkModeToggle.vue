<template>
	<!-- <link rel="stylesheet" href="main.css"> -->
	<label class="switch">
		<input type="checkbox" v-model="isDark">
		<span class="slider"></span>
	</label>
</template>

<script setup>
	 import {ref,watch, onMounted} from 'vue';
	 	// Disponible tanto para el componente de esta utileria, como p/cualq template que se ocupe
	 	/**  a recordar importancia del scope */ 
	 const isDark = ref(false);

	  function themeModeDark(){
	 
	 	 // Al cargar, la preferencia
	 	 onMounted(()=>{
	 	 	const savedTheme = localStorage.getItem('theme');
	 	 	 if(savedTheme === 'dark'){
	 	 	 	isDark.value = true;
	 	 	 	document.documentElement.classList.add('dark-mode');
	 	 	 }
	 
	 	 });
	 	 	/**
	 	 	 * Dato curioso el watch es equivalente al Observable en JS,
	 	 	 * >> `Observa los cambios y aplica el modo` >> 
	 	 	 *  **/
	 	   watch(isDark, (newVal)=>{
	 	   	 if(newVal){ // agrega el tema claro
	 	   	 	document.documentElement.classList.add('dark-mode');
	 	   	 	 localStorage.setItem('theme', 'dark');
	 	   	 }else{  // quita el tema obscuro
	 	   	 	document.documentElement.classList.remove('dark-mode');
	 	   	 	 localStorage.setItem('theme', 'light');
	 	   	 }
	 	   });  // #end_watch
	 }
	 themeModeDark();
</script>

<style scoped>
	/*Estilos del boton animado*/

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		display: none;
	}

	.slider {
		position: absolute;
		background-color: #ccc;
		cursor: pointer;
		border-radius: 34px;
		 top:0;
		 left: 0;
		 right: 0;
		 bottom: 0;
		 transition: 0.4s;
	}
		/*aplicando un pseudoselector previo al deslis*/

	.slider::before {
		content: "";
		position: absolute;
		height: 26px;
		width: 26px;
		 left: 4px;
		 bottom: 4px;
		 background-color: white;
		 border-radius: 50%;
		 transition: 0.4s;
	}    /*** APLICAR EFECTO [ Power| Off ] *** /
	/** Cuando el input este activado **/
	input:checked+.slider {
		background-color: #4f4f4f;  /* fondo modo obscuro */
	}
	/* si el toogle-input está activado, mover el circulo */
	input:checked + .slider::before{
		transform: translate(26px);
	}
</style>