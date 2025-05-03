<template>
		<h2 class="tit-gnrl">Información Total  del Profesor</h2>
	<div>
		  <h5 class="subtit-gnrl">Categorias del Profesor</h5>
	</div>
	<!-- form Mockup Tachers  -->
	<!--<form @submit.prevent="sendFormTeach">  evitar la redireccion-->
		<!-- <div class="card"> -->
			<div id="inf-personal" class="card sect-regist">
				<h1 class="tit-sec">Datos Personal(es)</h1>
		      <label   class="ent-text" ></label>
		      <label   class="ent-text" ></label>
		      <label   class="ent-text" ></label>
		      
		      <label type="number" class="ent-text" ></label>
		      <label   v-modal="datosFrmPrf" class="ent-text"  type="text" ></label>
		      <label class="subtit-gnrl"></label>
		      <label>Masculino</label>
		      <label  value=""  class="ent-radio" name="genere"></label>
		      <label for=""></label>
		      <!-- <label  value="" class="ent-radio" name="genere"></label> -->
		      <label    class="ent-text"  ></label>
			</div>

			<div id="inf-academica" class="card sect-regist">
				<h1 class="tit-sec">Datos Académicos</h1>
				<label type="number" class="ent-text"  ></label>
		          <label class="subtit-gnrl">Seleccine su grado</label>
			    <!-- <select class="ent-text" v-model="opcSelected" id="opciones">
			   	   <option v-for="opcion in opciones" :key="opcion.id" :value="opcion.valor">
			   	    		{{opcion.valor}}
			   	   </option>
			    </select> -->
		   		<label   class="ent-text" type="text"></label>
		   		<label  class="ent-text" type="email"></label>
			</div>

			<div id="inf-trabajo" class="card sect-regist">
				<h1 class="tit-sec">Datos de Trabajo</h1>
				<label type="number" class="ent-text"  ></label>
			   	<label class="subtit-gnrl">Jornada Laboral</label>
			   	<select name="" id="" class="ent-text"> 
			   		<option value="">Completa</option>
			   		<option value="">Parcial</option>
			   		<option value="">Horas x Catedra</option>
			   	</select>
			   	<label class="subtit-gnrl" ></label>
			   	<label type="date" class="ent-text"></label>
			   	 	<label class="subtit-gnrl">Areá Académica</label>
			   	<select name="" id="" class="ent-text">
			   		<option value="">Desarrollo</option>
			   		<option value="">Config. de Redes</option>
			   		<option value="">Adm. de Sistemas</option>
			   	</select>
			</div>
	<!-- </form> -->
</template>

<script setup>

		import  {ref, onMounted} from 'vue';
				    const profesor_cg_personal = ref([]); 
				    const profesor_cg_academic = ref([]); 
				    const profesor_cg_job = ref([]);
				    const profesor_cg_session = ref([]);  
				    // const image = ref();

				  onMounted(()=>{
				  	// No
				  		const data_pCtg_01 = localStorage.getItem('profesores-d-personales');
				  		const data_pCtg_02 = localStorage.getItem('profesores-d-academicos');
				  		const data_pCtg_03 = localStorage.getItem('profesores-d-empleo');
				  		const data_pCtg_04 = localStorage.getItem('profesores-d-sesion');
				  			if(data_pCtg_01 && data_pCtg_02 && data_pCtg_03 && data_pCtg_04){
				  				  profesor_cg_personal.value = JSON.parse(data_pCtg_01);
				  				  profesor_cg_academic.value = JSON.parse(data_pCtg_02);
				  				  profesor_cg_job.value = JSON.parse(data_pCtg_03);
				  				  profesor_cg_session.value = JSON.parse(data_pCtg_04);
	  // Guiarse con la vista de profileAlumsVue.js, descompone por item, sino seria la administrar  Registro profesores
				  			}else{
				      		  alert("Para mostrar su perfil, Primero necesito haberse registrado");
				  			}

				  });

	// Paso 1. - Convertir de Objeto LS a Arreglo 
	
	// Paso 2. - Validar por inicio de Sesión o por Arreglo (modifando el script autenticaAlumn de api)


	// Paso 3. - Comparar la el item de sesion del profesor vs el stge del registro del Alumno (registerAlum)
	  // a. buscar la posicion en el stge del profesor, y comparala vs el item sesion del arr de (creden_profe_session) 


	// Paso 4. - Verificar que la información venga cruda(formato Arr) 
		 // - parsear la informacion cruda

	// PAso 5. - Desplegar la información reactivamente
          // creden_profe_session[profesores profesor(indice Js)]

	// scope del Degign - Aplicar estilos para ayudar al UX 

</script>