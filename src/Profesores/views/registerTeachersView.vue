<template>
		<h2 class="tit-gnrl">Registrar Profesor</h2>
	<div>
		  <h5 class="subtit-gnrl">Instrucción: Debe Completar todos Los campos</h5>
	</div>
	<!-- form Mockup Tachers  -->
	<form @submit.prevent="sendFormTeach">  <!--evitar la redireccion-->
		<!-- <div class="card"> -->
			<div id="inf-personal" class="card sect-regist">
				<h1 class="tit-sec">Personal</h1>
		      <input  v-model="datosForma" class="ent-text" type="text" placeholder="Nombre">
		      <input  v-model="datosForma" class="ent-text" type="text" placeholder="Apellido Materno">
		      <input  v-model="datosForma" class="ent-text" type="text" placeholder="Apellido Paterno">
		      <label class="subtit-gnrl">Genero</label>
		      <label>Masculino</label>
		      <input type="radio" value="Femenino"  class="ent-radio" name="genere">
		      <label for="">Femenino</label>
		      <input type="radio" value="Masculino" class="ent-radio" name="genere">
		      <input   type="text" placeholder="Generando Usuario" class="ent-text" @clic="generateUser">
			</div>

			<div id="inf-academica" class="card sect-regist">
				<h1 class="tit-sec">Académica</h1>
				<input type="number" class="ent-text"  placeholder="Numero de Cuenta">
		          <label class="subtit-gnrl">Seleccine su grado</label>
			    <select class="ent-text" v-model="opcSelected" id="opciones">
			   	   <option v-for="opcion in opciones" :key="opcion.id" :value="opcion.valor">
			   	    		{{opcion.valor}}
			   	   </option>
			    </select>
		   		<input  v-model="datosForma" class="ent-text" type="email" placeholder="Correo Academico">
			</div>
		  
		    <div id="inf-registro" class="card sect-regist">
		    	<h1 class="tit-sec">Datos Sesión</h1>
		      <label class="subtit-gnrl">Fecha de Registro</label>
		      <input type="date" class="ent-text" placeholder>

		     <input type="number" class="ent-text" placeholder="Total de Aportaciones">
		    	     <label class="subtit-gnrl" for="tit_tpo-mat">Material mas comun</label>
				    <select class="ent-text" name="" id="">
					     <option value="">PDF</option>
					     <option value="">DOCX</option>
					     <option value="">PPTX</option>
				   </select> 
		    </div>
		 <button type="submit">Registrar Prof</button>
	</form>

	<!-- Maquetado de la ventana Modal -->
	<div  v-if="mostrar_modal" class="modal">
		<div class="modal-box">
			<!-- <span class="modal-close" @click="closeModal">&times;</span>
			  <h3>Datos Capturados</h3>
			  <p>Nombre:<strong>{{datosForma.name}} </strong></p>   
			  <p>Apellido: <strong>{{datosForma.lnme}} </strong></p> -->
		</div>
	</div>
</template>

<style scoped>
	
	.card {
	  margin: 0 auto; /* Centra horizontalmente */
	  max-width: 550px;        /* Ancho máximo de la tarjeta */
      width: 458px;
      height: 388px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

    .tit-gnrl {
	   padding: 10px 0;
	   color: #1b5e20; /* Verde oscuro */
	   text-transform: capitalize;
	   text-align: center;
	   font-size: 1.8em;
	   border-bottom: 2px solid #ffd600; /* Dorado brillante */
	   margin-bottom: 20px;
	   font-family: 'Century Gothic', 'Avant Garde', sans-serif;
  	}

  	.tit-sec{
  		text-align: center;
  		font-family: 'Tahoma', monospace;
  		font-size: 1.4em;
  		color: #4cff;
  	}

	.subtit-gnrl {
	   padding: 3px 0;
	   color: #444; /* Verde más claro */
	   text-align: center;
	   font-size: 1.1em;
	   font-weight: 100;
	   margin:-3px 76px;
 	   font-weight:bold;
 	   font-family:  Georgia, 'Times New Roman', serif;
	}

	.sect-regist{
      padding: 4px auto;
      width: 90%;
      margin: 9px auto;
	}	

	.ent-text {
	  display: block;            /* Hace que cada input esté en su propia línea */
	  width: 90%;               /* coloc el ancho fijo como 400px preferible */
	  max-width: 400px;
	  margin: 10px auto;       /* Espacio entre inputs */
	  padding: 12px 16px;        /* Espaciado interno grande */
	  font-size: 1.1rem;         /* Letra más grande */
	  border: 1px solid #ccc;    /* Borde sutil */
	  border-radius: 6px;        /* Bordes redondeados */
	  box-sizing: border-box;    /* Evita que padding aumente el ancho total */
	}

	.ent-radio{
	   width: 20px;
	   height: 20px;
	   border: 2px solid #888;
	   border-radius: 50%;
	   margin-right: 8px;
	   position: relative;
	   top: 4px;
	}
  
    	button{
  		  padding: 10px 15px;  /*10px 15px; */
		    margin-top: 15px;
		    background-color: #0d3e;
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
    	    margin: auto auto;
  		} 
</style>

<script setup>
	import { ref } from 'vue';

	  // Definit de las opciones como un array reactive
	const opcSelected = ref('');  // Val selecct
	const opciones = ref([
	  { id: 0, valor: 'Ing. Mecánico', texto: 'Opción 1' },
	  { id: 1, valor: 'Ing. Electronico', texto: 'Opción 2' },
	  { id: 2, valor: 'Ing. Civil', texto: 'Opción 3' },
	  { id: 3, valor: 'Mtro Ciencias Computacion', texto: 'Opción 4' }
	]);

	/* (sin setup) export default {
	  data() { return{ opcSelected: '', opciones: [
	  	  { id: 0, valor: 'Ing. Mecánico', texto: 'opcion1' },{ id: 1, valor: 'Ing. Electronico', texto: 'Opción2' },
	  	  { id: 2, valor: 'Ing. Civil', texto: 'Opción3' }, { id: 3, valor: 'Mtro Ciencias Computacion', texto: 'op-4'}
	  	  ]  }  }  } */
</script>