<template>
		<h2 class="tit-gnrl">Registrar Profesor</h2>
	<div>
		  <h5 class="subtit-gnrl">Instrucción: Debe Completar todos Los campos</h5>
	</div>
	<!-- form Mockup Tachers  -->
	<form @submit.prevent="sendFormTeach">  <!--evitar la redireccion-->
		<!-- <div class="card"> -->
			<div id="inf-personal" class="card sect-regist">
				<h1 class="tit-sec">Datos Personal(es)</h1>
		      <input  v-model="datosProfesor.personal.nomb" class="ent-text" type="text" placeholder="Nombre">
		      <input  v-model="datosProfesor.personal.ap_materno" class="ent-text" type="text" placeholder="Apellido Materno">
		      <input  v-model="datosProfesor.personal.ap_paterno" class="ent-text" type="text" placeholder="Apellido Paterno">
		      
		      <input   v-model="datosProfesor.personal.direccion" class="ent-text"  type="text" placeholder="Dirección">
		      <input   v-model="datosProfesor.personal.telephone" type="number" class="ent-text" placeholder="Teléfono">
		      <label class="subtit-gnrl">Genero</label>
		      <label>Masculino</label>
		      <input   v-model="datosProfesor.personal.genero"  type="radio" value="Masculino"  class="ent-radio" name="genere">
		      <label for="">Femenino</label>
		      <input  v-model="datosProfesor.personal.genero"	type="radio" value="Femenino" class="ent-radio" name="genere">
		     <input   v-model="datosProfesor.personal.eminstitut" type="text" class="ent-text" placeholder="Correo Institucional"  @clik="generateUser">
			</div>

			<div id="inf-academica" class="card sect-regist">
				<h1   class="tit-sec">Datos Académicos</h1>
				<input v-model="datosProfesor.academico.cta"  type="number" class="ent-text"  placeholder="Numero de Cuenta">
		          <label class="subtit-gnrl">Seleccine su grado</label>
			    <select class="ent-text" v-model="datosProfesor.academico.opcSelected" id="opciones">
			   	 <option   v-for="opcion in opciones" :key="opcion.id" :value="opcion.valor">
			   	    		{{opcion.valor}}
			   	   </option>
			    </select>
		   		<input  v-model="datosProfesor.academico.tit_prof"  class="ent-text" type="text" placeholder="Titulo Profesional">
		   		<input  v-model="datosProfesor.academico.egreso" class="ent-text" type="text" placeholder="Institución de Egreso">
			</div>

			<div id="inf-trabajo" class="card sect-regist">
				<h1 class="tit-sec">Datos de Trabajo</h1>
				<input  v-model="datosProfesor.trabajo.n_materias" type="number" class="ent-text"  placeholder="Num. Materias Impartidas">
			   	<label class="subtit-gnrl">Jornada Laboral</label>
			   	<select  v-model="datosProfesor.trabajo.tipo_jornada" id="" class="ent-text"> 
			   		<option  value="Completa">Completa</option>
			   		<option  value="Parcial">Parcial</option>
			   		<option  value="Horas x Catedra">Horas x Catedra</option>
			   	</select>
			   	<label class="subtit-gnrl" >*Fecha de Ingreso</label>
			   	<input  v-model="datosProfesor.trabajo.fecha" type="date" class="ent-text">
			   	 	<label class="subtit-gnrl">Areá Académica</label>
			   	<select  v-model="datosProfesor.trabajo.area"name="" id="" class="ent-text">
			   		<option  value="Desarrollo">Desarrollo</option>
			   		<option  value="Config. de Redes">Config. de Redes</option>
			   		<option  value="Adm. de Sistemas">Adm. de Sistemas</option>
			   	</select>
			</div>
		  
		    <div id="inf-registro" class="card sect-regist">
		    	<h1 class="tit-sec">Datos Sesión</h1>
		      <label class="subtit-gnrl">Fecha de Registro</label>
		      <input v-model='datosProfesor.sesion.fecha' type="date" class="ent-text" placeholder>

		     <input  v-model='datosProfesor.sesion.n_aportacion'  type="number" class="ent-text" placeholder="Total de Aportaciones">
		    	     <label class="subtit-gnrl" for="tit_tpo-mat">Material mas comun</label>
				    <select  v-model="datosProfesor.sesion.formato"class="ent-text" name="" id="">
					     <option  value="PDF">PDF</option>
					     <option  value="DOCX">DOCX</option>
					     <option  value="PPTX">PPTX</option>
				   </select> 
		    </div>
		 <button type="submit">Registrar Prof</button>
	</form>
	
</template>

<script setup>
   import  {  datosProfesor, cleanProfesores } from  './profesorHelpers.js'; 
   import {userProfesorData} from '../composable/userProfesorData.js';
	import { ref } from 'vue';

	const { addAllDataProfessor, loadProfesorData} = userProfesorData();

	const opciones = ref([
	  { id: 0, valor: 'Ing. Mecánico', texto: 'Opción 1' },
	  { id: 1, valor: 'Ing. Electronico', texto: 'Opción 2' },
	  { id: 2, valor: 'Ing. Civil', texto: 'Opción 3' },
	  { id: 3, valor: 'Mtro Ciencias Computacion', texto: 'Opción 4' }
	]);

	function sendFormTeach(){
		console.log("Datos llanos sin vue a guardar:", JSON.parse(JSON.stringify(datosProfesor.value)));
		loadProfesorData()    // Guarda en el localStorage (los lee)
		 addAllDataProfessor(); // Recarga si es necesario (imp)
		  cleanProfesores();   // limpia las categorias de formularios
	}


		// === OBJETOS REACTIVOS === 
	   /* function initDataAllCategProfessor(){ // 0. Setear los datos del arreglo
				// PERSONALES
			const datosProfesor = ref({
						nomb: '',
						ap_materno: '',
						ap_paterno: '',
						direction: '',
						telephone: null,
						genero: '',
						eminstitut: ''	
					});
			// ACADEMICOS
			const datosProfesor = ref({
						 cta: null,
						 opcSelected: '',
						 tit_prof: '',
						 egreso: ''
					});
			// TRABAJO
			const datosProfesor = ref ({
						 n_materias: null,
						 tpo_jornada: '' ,
						 fecha: '',
						 area: ''
					});
			// SESIÓN
			const datosProfesor =ref({
						fecha: '',
						n_aportacion:  null,
						formato: '',
					});

			return {datosProfesor,datosProfesor,datosProfesor,datosProfesor}
	    }*
		// MODAL
		const mostrar_modal = ref(false);

		 function cleanProfesores(){//no lleva this son globlaes en el otro si, porque estaba dentro sin setup
			datosProfesor.value = {
				nomb: '',
					ap_materno: '',
					ap_paterno: '',
					direction: '',
					telephone: '' ,
					genero: '',
					eminstitut: ''
			};

			datosProfesor.value = {
				cta: '',
			    opcion: '',
			    tit_prof: '',
			    egreso: ''
			};

			datosProfesor.value = {
				 n_materias: '' ,
					 tpo_jornada: '' ,
					 fecha: '',
					 area: ''
			};

			datosProfesor.value = {
				fecha: '',
				n_aportacion: '',
				formato: '',
			}

		}*/
		
</script>

 <style scoped>
	
	.card {
	  margin: 0 auto; /* Centra horizontalmente */
	  max-width: 550px;        /* Ancho máximo de la tarjeta */
      width: 458px;
      height: 448px;
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
	