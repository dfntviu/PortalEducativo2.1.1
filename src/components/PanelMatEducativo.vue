<template>
	<!-- Panel de Notificaciones  -->
	<div class="container-pnl">
			<div  v-for="(material,idx) in materiales" :key="idx" class="panel">
					<div class="container-pnl">
						 <h2>Material Reciente</h2>
						 <div>El Usuario: <strong>{{material.apellido}}</strong></div>
						 <div>Publicó recientemente: <strong>{{material.titulo}}</strong></div>
						 <textarea name="extract"  class=""   readonly>
						 	  {{material.file}}
						 </textarea class="size-area">
						   <li><a :href="material.enlace || '#'"><strong>Material Completo</strong></a></li>
						   <p>El Día: <strong>{{material.fecha ||  fechaActual}}</strong></p>
					</div>
			</div>
			<!--  Si aun no se  ha subido Materia Educativo -->
			<div  v-if="materiales.length===0" class="panel">
			  	<div class="modal-box">
			  		<h2>Sin Publicaciónes aún</h2>
			  		<p>No se econtraron Materiales en este momento.</p>
			  	</div>
		  </div> 
	</div>
</template>	

<script setup>
	import { ref, onMounted } from 'vue';
	 
	  const materiales = ref([]); 
	  const fechaActual = new Date().toLocaleDateString();
	  const buscarAlumno = localStorage.getItem('alumno-buscado') || "";

	 onMounted(()=>{
	 	 					 const aportes = JSON.parse(localStorage.getItem('materiales-educativos'))||[];
	 	 					 const users = JSON.parse(localStorage.getItem('alumnos-registrados'))||[];

	 	 						const resultado = users.find(alum => alum.lnme === buscarAlumno);

	 	 					if(resultado){
	 	 							const materials_filtrados = aportes.filter(mat => mat.autor === resultado.usuario);

		 	 					materiales.value = materials_filtrados.map(elemen => ({
		 	 						apellido: resultado.lnme,
		 	 						titulo:elemen.title,
		 	 						file:elemen.filename,
		 	 						fecha:elemen.date || fechaActual,
		 	 						enlace:elemen.link || '#'  //enlace bucket FBaseStorag
	 	 					  }));
	 	 					}
	 });
	 // const buscarAlumno = 'Flores';
</script>

<style scoped>
	.container-pnl {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
	  gap: 1.5rem;
	}

	.panel {
	  background-color: #ffffff;
	  border-left: 6px solid #44bd32; /* Verde */
	  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
	  border-radius: 12px;
	  overflow: hidden;
	  transition: transform 0.2s;
	}

	.panel:hover {
	  transform: translateY(-3px);
	}

	.modal-box {
	  padding: 1rem 1.2rem;
	}
	.size-area{
		height: 106px;
		width: 304px;
	 }
</style>