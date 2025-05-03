<template>
	<!--  Mockup Reading Profile Teacher  -->
	<div class="perfil-profesor">
		 <h5 class="subtit-gnrl">Categorias del Profesor</h5>
		    <!--Sección-1: Datos Personales  -->
			<div v-if="profesorPersonal.length > 0" id="inf-personal" class="card sect-regist">  
				<h1 class="tit-sec">Datos Personal(es)</h1> profesorPersonal
		      <p><strong>Nombre:</strong>{{profesorPersonal[0]?.nomb}}</p> 
		      <p><strong>Ape llido Paterno:</strong>{{profesorPersonal[0]?.ap_materno}}</p>
		      <p><strong>Apellido Materno:</strong>{{profesorPersonal[0]?.ap_paterno}}</p>
		      <p><strong>Dirección:</strong>{{profesorPersonal[0]?.direccion}}</p>
		      <p><strong>Teléfono:</strong>{{profesorPersonal[0]?.telephone}}</p>
		      <p><strong>Genéro:</strong>{{profesorPersonal[0]?.genero}}</p> 
		      <p><strong>Correo Institucional:</strong>{{profesorPersonal[0]?.eminstitut}}</p>
			</div>

			<!--Sección-2: Datos Academicos  -->
			<div  v-if="profesorAdecemic.length > 0" id="inf-academica" class="card sect-regist">  
				<h1>Datos Académicos</h1>
				<p><strong>Num. de Cta:</strong>{{profesorAdecemic[0]?.cta}}</p>
				<p><strong>Grado:</strong>{{profesorAdecemic[0]?.opSeleceted}}</p>
				<p><strong>Título Profesional:</strong>{{profesorAdecemic[0]?.tit_prof}}</p>
				<p><strong>Institución de Egreso:</strong>{{profesorAdecemic[0]?.egreso}}</p>
			</div>

			<!--Sección-3: Datos d Trabajo > [Job]  -->
			<div  v-if="profesorJob.length > 0" id="inf-academica" class="card sect-regist">
				<h1>Datos de Sesión</h1>  		
				<p><strong>Fecha de Registro:</strong>{{profesorJob[0]?.n_materias}}</p>
				<p><strong>Total de Aportaciones:</strong>{{profesorJob[0]?.tipo_jornada}}</p>
				<p><strong>Formato en Común:</strong>{{profesorJob[0]?.fecha}}</p> 
				<p><strong>Área académica:</strong>{profesorJob[0]?.area}</p>
			</div>

			<!--Sección-4: Datos Sesion  -->
			<div v-if="profesorSession.length > 0" id="inf-academica" class="card sect-regist"> 
				<h1>Datos de Sesión</h1>
				<p><strong>Numero de Materias:</strong>{{profesorSession[0]?.fecha}}</p>  
				<p><strong>Jornada Laboral:</strong>{{profesorSession[0]?.n_aportacion}}</p>
				<p><strong>Fecha de Ingreso:</strong>{{profesorSession[0]?.formato}}</p>
				<!-- <p><strong>Institución de Egreso:</strong>{profesoAdecemic[0]?.egreos}</p> -->
			</div>
			<!-- Advertencia -->
			<div v-if="error" class="alert-warning">
				{{error}}
			</div>
	</div>
</template>

<script setup> 
	 import  { p_datosFrmPrf, ac_datosFrmPrf, jb_datosFrmPrf,sn_datosFrmPrf } from  './profesorHelpers.js'; 
	 import  { userProfesorData }  from '../composable/userProfesorData.js';
	 // import  { resetProfesorData }  from '../composable/userProfesorData.js';
	 

	  const {
	  	profesorPersonal,
	  	profesorAdecemic,  
	  	profesorJob,  //me faltos
	  	profesorSession,
	  	error,
	  	isDataLoaded,
	  	loadProfesorData
	  } = userProfesorData();
      
	     // resetProfesorData();
      // console.log("D. Personales",{personales: profesorPersonal});

</script>