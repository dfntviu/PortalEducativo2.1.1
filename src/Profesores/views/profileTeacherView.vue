
<template>
	<!--  Mockup Reading Profile Teacher  -->
	<div class="perfil-profesor">
		 <h5 class="subtit-gnrl">Categorias del Profesor</h5>
		    <!--Sección-1: Datos Personales  -->
			<div v-if="profesores.personal" id="inf-personal" class="card sect-regist">  
				<h1 class="tit-sec">Datos Personal(es)</h1> profesores
		      <p><strong>Nombre: </strong>{{profesores.personal.nomb}}</p> 
		      <p><strong>Ape llido Paterno: </strong>{{profesores.personal.ap_materno}}</p>
		      <p><strong>Apellido Materno: </strong>{{profesores.personal.ap_paterno}}</p>
		      <p><strong>Dirección: </strong>{{profesores.personal.direccion}}</p>
		      <p><strong>Teléfono: </strong>{{profesores.personal.telephone}}</p>
		      <p><strong>Genéro: </strong>{{profesores.personal.genero}}</p> 
		      <p><strong>Correo Institucional: </strong>{{profesores.personal.eminstitut}}</p>
			</div>

			<!--Sección-2: Datos Academicos  -->
			<div  v-if="profesores.academico && profesores.academico.cta !== null" id="inf-academica" class="card sect-regist">  
				<h1>Datos Académicos</h1>
				<p><strong>Num. de Cta: </strong>{{profesores.academico.cta}}</p>
				<p><strong>Grado: </strong>{{profesores.academico.opcSelected}}</p>
				<p><strong>Título Profesional: </strong>{{profesores.academico.tit_prof}}</p>
				<p><strong>Institución de Egreso: </strong>{{profesores.academico.egreso}}</p>
			</div>

			<!--Sección-3: Datos d Trabajo > [Job]  -->
			<div  v-if="profesores.trabajo && profesores.trabajo.n_materias !== null" id="inf-academica" class="card sect-regist">
				<h1>Datos de Sesión</h1>  		
				<p><strong>Número de Materias: </strong>{{profesores.trabajo.n_materias}}</p>
				<p><strong>Jornada Laboral: </strong>{{profesores.trabajo.tipo_jornada}}</p>
				<p><strong>Fecha de Ingreso: </strong>{{profesores.trabajo.fecha}}</p> 
				<p><strong>Área Académica: </strong>{{profesores.trabajo.area}}</p>
			</div>

			<!--Sección-4: Datos Sesion  -->
			<div v-if="profesores.sesion && profesores.sesion.fecha" id="inf-academica" class="card sect-regist"> 
				<h1>Datos de Trabajo</h1>
				<p><strong>Fecha de Ingreso: </strong>{{profesores.sesion.fecha}}</p>
				<p><strong>Núm de Aportaciónes: </strong>{{profesores.sesion.n_aportacion}}</p>
				<p><strong>Formato de Trabajo: </strong>{{profesores.sesion.formato}}</p>  
			</div>
			<!-- Advertencia -->
			<div v-if="error" class="alert-warning">
				{{error}}
			</div>
	</div>
</template>

<script setup> 
	 import  { userProfesorData }  from '../composable/userProfesorData.js';
	   import  { datosProfesor } from  './profesorHelpers.js'; 
	   // import  { resetProfesorData }  from '../composable/userProfesorData.js'; 
	 
	 // Obtener el email desde la sesion
	 const emailProfesor = localStorage.getItem('usuario_loggin');


	  const {
	  	profesores,
	  	error,
	  	getProfesorEmail,
	  	isDataLoaded,
	  } = userProfesorData();
      
	   const profesorActivo = getProfesorEmail(emailProfesor);

	    // resetProfesorData();  ## Habilitar sí y solo si se desea vaciar el LStorage ##
      // console.log("D. Personales",{personales: profesores});

</script>