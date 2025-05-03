<template>
 	<div>
		<select v-model="selectedAlumno">
			 <option disabled value="">---Elige al Usuario---</option>
			  <option v-for="alumo in alumnos" :key="alumno" :value="alumno.cta">
			  	  {{alumno.cta}}
			  </option>
		</select>
	
		<div v-if="selectedAlumno">
			<h2>Tema</h2>
			<select v-model="selectedTema">
				<option disabled value="">---Elige el Tema---</option>
				<option v-for="tema in temasAlumno" :key="tema.nombre" :value="tema.nnme"></option>
				  {{tema.nombre}}
			</select>
		</div>
	
		<div v-if="contenidoTema">
			<h3>Contenido Material</h3>
			<p>{{contenidoTema}}</p>
		</div>
 	</div>
</template>

<script>
	import { ref, computed } from 'vue'

	// Obtener datos de LocalStorage
	const alumnos = ref(JSON.parse(localStorage.getItem('profesores-d-academicos')) || [])
	const publicaciones = ref(JSON.parse(localStorage.getItem('publicaciones-alumnos')) || [])

		// Se guardarán los seleccionados
	 const selectedAlumno = ref(['']);
     const selectedTema = ref(['']);

     	// temas disponibles del alumno seleccio
     const temasAlumno = computed(()=>{
     	 if(!selectedAlumno.value) return []
     	 	return publicaciones.value.filter(pub => pub.cta === selectedAlumno.value)
     })

     // Contenido dinamico del tema seleccio
     const contenidoTema = computed(()=>{
     	 if(!selectedTema.value) return []
     	 	const publicaciones.value.find(pub => pub.nombre === selectedTema.value && pub.cta === selectedAlumno.value)
     	      return tema ? tema.contenido : '';
     })

</script>