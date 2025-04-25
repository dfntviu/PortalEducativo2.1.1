<template>
	<h2 class="tit-gnrl">Cargar Archivo Electrónico</h2>
	<div>
		  <h5 class="subtit-gnrl">Cargar tu Contenido Digital</h5>
	</div>
	<!-- Maquetado del Formulario -->
	<form @submit.prevent="uploadConent">  <!--evitar la redireccion-->
		<div class="card">
		   <input   class="ent-long" type="text" placeholder="Título del Material" v-model="title">
		   <input   class="ent-long" type="text" placeholder="Apellido del Alumno" v-model="last_name" id="lname">
		   <input class="ent-long" type="number" placeholder="usuario admitido" v-model="user_Id">
		   <label>Tipo de Material</label>
		   <select name="clasificacion" id="clasify" class="ent-long" v-model="classification">
		   	   <option value="opt-1">Libro</option>
		   	   <option value="opt-2">Presentación</option>
		   	   <option value="opt-3">Apuntes</option>
		   </select>

		   <label for="load-date">Fecha:</label>
		   <input class="ent-long" type="date" v-model="date">
		 <input   class="ent-long" type="file"  accept="application/pdf" @change="handlePDFUpload" placeholder="Buscar Material">
		   
		    <div> <!--class="space-btn" -->
		   	<button type="submit">Subir</button>
		   </div>
		</div>
	</form>
</template>
<script setup> 
	import {ref} from 'vue';

	     const file = ref(null)
	    const title = ref('')
	const last_name = ref('')
	  const user_Id = ref('')
	 const classification = ref('')
	 const     date = ref('')
	 const pdfBase64 = ref(null)

	  	function handlePDFUpload(event){
	  	     const uploaded = event.target.files[0]; 
	  	  	if(uploaded && uploaded.type === "application/pdf"){
	  	  		 const lector = new FileReader();
	  	  		    lector.onload = ()=>{
	  	  		    	pdfBase64.value = lector.result;  //# falto
	  	  		    };
	  	  		    lector.readAsDataURL(uploaded);
	  	  		    file.value = uploaded;
	  	  	}else{
	  	  		alert('Incompatibilidad detectada. Unicamente selecciona Archivos PDF.');
	  	  		 file.value = null;
    			 pdfBase64.value = null;
	  	  	}
	  	}

	  	const  uploadConent = async () =>{

	  		if(!file.value || !pdfBase64.value){  //error # 1 neg
	 			alert("Selecciona un archivo y asegurate que se haya leído correctamente");
    		  	return;
	 		}

	  		  const material = {
					 	     title: title.value,
					 	 last_name: last_name.value,
					 	   user_Id: user_Id.value,
					 	 classification: classification.value,
					 	    date: date.value,
					 	    file: pdfBase64.value,
					 	filename: file.value.name
				 	};	

				 	const materialesGuardados = JSON.parse(localStorage.getItem('materiales-educativos')) || [];
				 	      materialesGuardados.push(material);
				 		  localStorage.setItem('materiales-educativos', JSON.stringify(materialesGuardados));   

				 		    alert("El Material educativo fue cargado EXITOSAMENTE.");

				   // Reseteamos los campos
				 		    title.value = '',
					 	last_name.value = '',
					 	  user_Id.value = '',
				   classification.value = '',
				 	 	     date.value = '',
					        file.value = null

	  	}

</script>
 <style scoped>
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

	.subtit-gnrl {
		  padding: 5px 0;
		  color: #444; /* Verde más claro */
		  text-align: center;
		  font-size: 1.2em;
		  font-weight: 400;
		  margin-top: -10px;
		  margin-bottom: 20px;
	 	  font-weight:bold;
	 	  font-family:  Georgia, 'Times New Roman', serif;
	  }

	  .card {
		  margin: 0 auto; /* Centra horizontalmente */
		  max-width: 590px;        /* Ancho máximo de la tarjeta */
	      width: 495px;
	      height: 496px;
/*	      border: 1px solid #ccc;*/
	      border-radius: 10px;
	      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
	      overflow: hidden;
	      font-family: Arial, sans-serif;
    }

    	button{
  		  padding: 10px 15px;  /*10px 15px; */
		    margin-top: 15px;
		    background-color: #0077cc;
		    align-items: center;
		    color: white;
		    border: none;
		    border-radius: 6px;
		    cursor: pointer;
		    font-size: 16px;   
		    font-weight: 500; 
		     display: block;
    		margin-left: auto;
    		margin-right: auto;
		}
	   /* .tit-gnrl {
		  padding: 10px 0;
		  color: #1b5e20; /* Verde oscuro 
		  text-transform: capitalize;
		  text-align: center;
		  font-size: 1.8em;
		  border-bottom: 2px solid #ffd600; /* Dorado brillante 
		  margin-bottom: 20px; 
  		}*/
 </style>