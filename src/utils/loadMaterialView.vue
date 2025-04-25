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
		   <select name="clasificacion" id="clasify" v-model="classification">
		   	   <option value="opt-1">Libro</option>
		   	   <option value="opt-2">Presentación</option>
		   	   <option value="opt-3">Apuntes</option>
		   	  <!-- generate dinamico -->
		   </select>
		   <label for="load-date">Fecha:</label>
		   <input class="ent-long" type="date" v-model="date">
		 <input   class="ent-long" type="file"  accept="application/pdf" @change="handlePDFUpload" placeholder="Buscar Material">
		   
		   <div class="space-btn">
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
	 const date = ref('')
     
     const pdfBase64 = ref(null);

	 function handlePDFUpload(event){ 
	 	     file.value = event.target.files[0];   // # en lugar de referenciar se ocupa directo
	 	   if(file && file.type === "application/pdf"){
	 	   	   const lector = new FileReader();
	 	   	      lector.onload=()=>{
	 	   	      		pdfBase64.value = lector.result;
	 	   	      		  uploadConent();  //rehacer code de la 100 o solo invocar

	 	   	      };

	 	   	        lector.readAsDataURL(file);
	 	   }else{
	 	   	 alert("Por favor únicamente Selecciona Ficheros PDF");
	 	   }
	 }

	   // Manipula correctamente el fichero  (descomentar)
	 /*const handleFileChange = (event) => {
	     const selectedFile = event.target.files[0];
		if(selectedFile) {
		    file.value = selectedFile;
		    console.log("Archivo seleccionado:", selectedFile);
		}else {
	    	file.value = null;
	  	}
	}*/

       // Aloja en el LocalStorage, los datos correspondientes al fichero
	const uploadConent = async () =>{
	 	if(!file.value){
	 		alert("Selecciona un archivo");
    		  return;
	 	}

			try{

				if (!(file.value instanceof File)) {
  					alert("El archivo seleccionado no es válido.");
  					return;
				}
				    console.log(":",file.value);

				    console.log("Tipo de archivo:", typeof file.value);
					console.log("Instancia de File:", file.value instanceof File);
					console.log("Contenido del archivo:", file.value);

				 const fileUrl = URL.createObjectURL(file.value);

				    const material = {
					 	     title: title.value,
					 	 last_name: last_name.value,
					 	   user_Id: user_Id.value,
					 	 classification: classification.value,
					 	    date: date.value,
					 	 fileUrl,
					 	filename: file.value.name
				 	};


				   // localStorage.setItem('materialCargado', JSON.stringify(material));  //eror comun
				 	//Cambio Aplicado 19.Abril.25

				 	const materialesGuardados = JSON.parse(localStorage.getItem('materiales-educativos')) || [];
				 	      materialesGuardados.push(material);
				 		localStorage.setItem('materiales-educativos', JSON.stringify(materialesGuardados));   

				      alert("El Material educativo fue cargado Exitosamente (en el host)");

				     title.value = '' ,
					 last_name.value = '' ,
				 	 user_Id.value = '' ,
				 	 classification.value = '',
				 	 date.value = '' ,
				 	 file.value = null;

				 }catch(error){
			 		console.error("Error creando la URL del archivo:", error);
		    		alert("Hubo un problema al generar la URL del archivo.");
				 }
	}

	/* import {ref} from 'vue';
	 import {storage} from '@/firebase.js';
	 import {ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
          uploC{  alert('Selecciona un archivo de cualquier naturaleza. En un principio'); const fichero_path = `materiales/${fichero.value.name}`; const  ficheroRef = storageRef(storage, fichero_path);
      try{  await uploadBytes(ficheroRef,fichero.value);  const url = await getDownloadURL(ficheroRef);
   uploadedUrl.value = url; }catch(err){  console.error("Lo Sentimos, ha Existido un Error al Cargar el Contenido Digital,\t en nuestro"+  +"servidor",+"intenta nuevamente", err); } }*/
</script>
