
<template>
	<body>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
	<div class="center-contact">
			<h1 class="tit-ofi-uaemex">Información de Contacto</h1>
		<div class="contact-inf">
			<input type="text" placeholder="Te proporcionamos el Dato en nuestro Espacio Academico:" readonly>
			<input type="text" placeholder="No es posile mostrar el Dato, acudir al espacio Academico">
			<label>Horarios de Atención</label>
			<div class="time-range">	
			  <input  class="time-input" type="time" value="09:20"> 
			  <input  class="time-input" type="time" value="14:30">
			</div>
		</div>
		<div class="contact-form">
			<input  v-model="formSugency.phone" type="number" placeholder="Escribe tu Teléfono Celular">
			<input  v-model="formSugency.email" type="email" placeholder="Escribe tu Correo Electrónico">
			<input  v-model="formSugency.subject" type="text" placeholder="Escriba porfavor El Asunto">
			<textarea   v-model="formSugency.message" placeholder="Cuentanos,¿En que podemos ayudarte?"></textarea>

			<button @click="handleSubmit">Enviar</button>

			<!-- codigo de errores, (FBack visual: Correcto & Error) -->
			 <p v-if="error"   style="color:red">  {{error}} </p>
			 <p v-if="success" style="color:green"> !El Mensaje fue Envíado correctamente!</p>
			 <!-- Handle the logic of errors for emails, Manejo directo estilo en linea-->
		</div>
		<div class="pgs-ofs">
			<div>
				<label>Fuentes Oficiales</label> 
				<li><a href="https://www.uaemex.mx/"><i class="fa-solid fa-horse-head">UAEMéx Oficial</i></a></li>
				<li><a href="https://www.tiktok.com/@uaemex?lang=es"><i class="fa-brands fa-tiktok"></i>TikTok</a></li>
			</div>
		</div>
	</div>
		
	</body>
</template>

 <style>
  	  
  	  *{
  	  	margin: 0;
  	  	padding: 0;
  	  	box-sizing: border-box;
  	  }
  	  
  	 body{
  	  	display: flex;
  	  	justify-content: center;
		align-items: center;
		min-height: 100vh;
		font-family: Arial, sans-serif;
		background-color: #f5f5f5;
  	  }
  	 
  	 .center-contact{
  	 	 width: 90%;
  	 	 max-width: 600px;
  	 	 background-color: #fff;
  	 	 padding: 20px;
  	 	 border-radius: 8px;
  	 } 

  	 .contact-inf,
  	 .contact-form,
  	 .pgs-ofs{
  	 	margin-top: 20px;
  	 	display: flex;
  	 	flex-direction: column;
  	 	align-items: center; /*alinea el boton y entsd forma vertical */

  	 }

  	 .contact-form button{
  	 	align-self: center;  /* centra el botón en un contenedor flex */
  	 }

  	 .tit-ofi-uaemex {
	   padding: 10px 0;
	   color: #1b5e20; /* Verde oscuro */
	   text-transform: capitalize;
	   text-align: center;
	   font-size: 1.8em;
	   border-bottom: 2px solid #ffd600; /* Dorado brillante */
	   margin-bottom: 20px;
	   font-family: 'Century Gothic', 'Avant Garde', sans-serif;
  	}

  	.time-input {
	  width: 125px;       /* Tamaño suficiente para mostrar hora*/
	  padding: 8px;
	  font-size: 14px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	}

	.time-range{
		 display: flex;
             gap: 10px; /* Espacio entre inputs */
      align-items: center;
	}

  	 input,textarea{
  	 	width: 100%;
  	 	margin-bottom: 12px; /** bastante en el espacio ./. components */
  	 	padding: 10px;  /*help much texfield */
  	 	border-radius: 4px;
  	 	font-size: 14px;
  	 }
  	 
	/* Dimensiones del Comentario,obliga a tener la (prioridad de cualq. txt_area)*/
  	 textarea{
  	 	height: 200px !important;
  	 	 width: 490px !important;
  	 }

  	 label{
  	 	font-weight: bold;
  	 	display: block;
  	 	margin-bottom: 6px;
  	 }
  	 
  	 .pgs-ofs a{
  	 	color: #0066c;
  	 	text-decoration: none;
  	 }

  	 .pags-ofs a:hover{
  	 	text-decoration: underline;

  	 }
  	 
  	 button{
  	 	background-color: #0066cc;
  	 	padding: 10px 15px;
  	 	color: white;
  	 	cursor: pointer;
  	 	border: none;
  	 	border-radius: 4px;

  	 }

  	 button:hover{
  	 	background-color: #004a99;
  	 }

 </style>

 <script>
 		import { ref } from 'vue';
 		// Utilizando la metodologia de Dev-FrontEnd - Composition API
 		export default  {
 			setup(){
 				const formSugency = ref({
 					phone: '',	
 					email: '',
 					subject: '',
 					message: ''
 				});

 				const error = ref('');
 				const success = ref(false);

 				// F(n) Controladora de la manipulacion de Envio
 				const handleSubmit = async () =>{
 				    if(!formSugency.value.phone || !formSugency.value.email 
 					   || !formSugency.value.subject || !formSugency.value.message){
		  					error.value = 'Por favor, completa todos los campos';
		  					error.success.value = false;
		  					  return;
		  			}
		  				// Exp regular, determina si la longitud celular es correcta
		  			if(!/^\d{10}$/.test (formSugency.value.phone)){
  					  	 error.value =  'El número Celuar contiene una longitud de 10 digítos';
  					  		return;
		  			}

		  			 // Verificar semanticamente, pertenece a  Correo Eléctronico
		  			 if(!formSugency.value.email.includes('@')){
		  			 		error.value = 'Error: El correo Eléctronico no es válido.';
		  			 		return; 
		  			}

		  			// llamado a la API, para consumir los servicios pertenecientes al E-mail
		  			  try{   //sera modify el arg. Fetch, cuando se compre el alojamiento de colecciones de FireBaseStorage
		  			  	  const response = await fetch('htttps://FireBaseStgeNme.com/api/contacto', {
		  			  	  	  method: 'POST',
		  			  	  	    headers: {'Content-Type': 'application/json' },
		  			  	  	    body: JSON.stringify(form_sgrcy.value)
		  			  	  });

		  			  	   if(!response.ok){
		  			  	   		 throw new Error('Error al Enviar el mensaje');
		  			  	   }

		  			  	   const result = await response.json();
		  			  	   	success.value = true;
		  			  	   	error.value = '';

		  			  	   	 console.log('Mensaje enviado: ',result);

		  			  	   	 // Limpiar formulario de Conctacto
		  			  	   	  form_sgrcy.value = { phone: '', email: '', subject: '', message:''};

		  			    }catch(err){
		  			    	error.value	= 'Error: Hubo un problema al enviar el mensaje';
		  			    	 success.value = false;
		  			    }


 				};
		  			    // enviar valores, en cualquier vista que sean necesarios.
		  			     return{
		  			     	 formSugency,
		  			     	 error,
		  			     	 success,
		  			     	 handleSubmit
		  			     };
 			// Instalandor el BackEnd para consumir el Storage: npm install firebase: << npm install firebase >>
 			}
 		};
 </script>