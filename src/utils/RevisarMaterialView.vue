<template>
	<!-- template revision del Material publicado -->
    <div class="container-pnl-revw">
  	 <h2>Areá de Revisión</h2>
	   	<div  class="panel">
			<div  v-for="(review, ide_rev) in reviews" :key="ide_rev" class="card">
				   <h3>Material Publicado</h3>
				  <p>Nombre:<strong>{{review.apellido}}</strong></p>   
				  <p> Fecha de Hoy: <strong>{{review.date}}</strong> </p>
				  <p>Público recientemente:<strong>{{review.titulo_lib}}</strong></p>
			 <!-- <textarea v-if="pdfBase64" :src="review.file" width="100%" height="400px" type="application/pdf" >review.file</textarea>  no-->
			 <iframe v-if="review.file" :src="review.file" width="100%" height="400px"></iframe>		
				  <!-- <textarea  class="publicacion" readonly>review.file</textarea>  (no funciona)-->
				  
			</div>
			 <button type="submit">Publicar</button>
		</div>
    </div>
</template>

<style >

	.card {
	   margin: 0 auto; /* Centra horizontalmente */
	   max-width: 800px;        /* Ancho máximo */
	   max-height: 450px;        /* largo máx */
       width: 800px;
       height: 440;
       border: 1px solid #ccc;
       border-radius: 10px;
       box-shadow: 0 4px 6px rgba(0,0,0,0.1);
       overflow: hidden;
       font-family: Arial, sans-serif;
    }

    .publicacion{
    	width: 785px;
    	height: 400px;
    }

	/*.panel {   
	  max-width: 43vw;
	  width: 300px;
	  padding: 2rem;
	  border: 1px solid #ccc;
	  margin: 11px auto;
	  width: max-content;
    }*/
</style>

<script setup>
import { ref, onMounted } from 'vue';

		// Trabaja en conjunto con la directiva review(revision), del array vacio de reviews(revisiones)
	const reviews = ref([]);
	
	onMounted(()=>{
	   	
			// Vinculamos los script(s) d alumnos y material [bse view-notificaciones]. Ya obt's cargaremos los datos mixtos
	   const revision_alumnos =  JSON.parse(localStorage.getItem('alumnos-registrados')) || [];
	   const revision_materiales =  JSON.parse(localStorage.getItem('materiales-educativos')) || [];  //#error

	     // Simulamos la sesión de cualquier usuario
	    	const alumno_test_ap = 'Rebanios';
	    	const libro_test = 'AprendeJS';

	   		/*const alumno_test_ap = ref('');  const libro_test = ref(''); -> buscar la prop js*/

			console.log("Alumnos: "+revision_alumnos);
	   		console.log("Materiales: "+revision_materiales);

	    		// Buscaremos si el alumno de prueba y libros existen, ademas q el material sea cargado
	   		const rev_material = revision_materiales.find(rv_mat=> rv_mat.title === libro_test);
	   		const rev_alumno = revision_alumnos.find(rv_alum=> rv_alum.lnme === alumno_test_ap);
	   	
	   		if(!rev_material || !rev_alumno){
	   			alert("Lo Sentimos: No Hemos encontrado material ni registro vínculado con el Alumno descrito");
	   		}else{
	   			// Si el material se alojo, será renderizado correctamente
	   			reviews.value = [{  //#error_2 - plural
	   				 apellido: rev_alumno.lnme,
	   				 date: new Date().toLocaleDateString(), //#error_3 - typing
	   				 titulo_lib: rev_material.title,
	   				 file: rev_material.filename	// error, cargar desde base64
	   			}];
	   			console.log("Contenido de file:", rev_material.file);

	   		}

	 });

	function viewDigitalContent(){
			// algoritmo en 5 pasos para desplegar un pdf med un template additional
	}

	// Log. al reves, lógica difusa no lo vuelvas hacer, es more easy al reverso: Comenzamos de la negacion a la aceptacion y no d la acept a la negacion
	/** No deveremos invocar la f(n) directamente, ya no es JS. La funcinon es reactiva. Y como necesita reactividad. la reactividad
	   			inicia desde el bloque html **/
  		
</script>
