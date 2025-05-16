<template class="formulario-view">
	<h2 class="tit-gnrl">Formulario | Registro de Alumnos</h2>
	<div>
		  <h5 class="subtit-gnrl">Instrucción: Debes llenar el Formulario por completo</h5>
	</div>
	<NetStatus/>  <!-- Componente verifica el Estado de la red-->
	<router-view/>
	<!-- Maquetado del Formulario -->
	<form @submit.prevent="sendForma">  <!--evitar la redireccion-->
		<div class="card">
			<!-- <div class="space-btn"> -->
				<input  type="file" @change="onFileChange" accept="image/*" />
    			<img v-if="imageData" :src="imageData" alt="Foto del alumno" width="150" />
    			<button v-if="imageData" @click="borrarImagen">Borrar foto</button>
			<!-- </div> -->
		   <input  v-model="datosForma.name" class="ent-long" type="text" placeholder="Nombre">
		   <input  v-model="datosForma.lnme" class="ent-long" type="text" placeholder="Apellido" @blur="guardarLastName">
		   <input  v-model="datosForma.degree" class="ent-long" type="text"  placeholder="Carrera (I-CARR)">
		   <input  v-model="datosForma.age" class="ent-long" type="number" placeholder="Edad (Deberá +18) ">
		   <input  v-model="datosForma.email" class="ent-long" type="email" placeholder="Correo">
		   <input  v-model="datosForma.passwd" class="ent-long" type="password" placeholder="Elija su Contraseña">
		   <!-- Contrasena, aniadido recientemente [May 12th] -->
		   <div class="space-btn">
		   	<button type="submit">Envíar</button>
		   </div>
		</div>
	</form>

	<!-- Maquetado de la ventana Modal -->
	<div  v-if="mostrar_modal" class="modal">
		<div class="modal-box">
			<span class="modal-close" @click="closeModal">&times;</span>
			  <h3>Datos Capturados</h3>
			  <p>Nombre:<strong>{{datosForma.name}} </strong></p>   <!--intepolar -->
			  <p>Apellido: <strong>{{datosForma.lnme}} </strong></p>
			  <p>Carrera: <strong>{{datosForma.degree}} </strong></p>
			  <p>Correo:  <strong>{{datosForma.email}} </strong></p>
		</div>
	</div>
	
	 <!-- Verify dinamyc the info see the view on the DOM -->
	 <div v-if="datosGuardados" class="saved-info">
	 	<h3>Está fue la información que Ud Guardo</h3>
	 	<p>Ud. se llama:<strong>{{datosGuardados.name}}</strong></p>
	    <p>Su apellido es:<strong>{{datosGuardados.lnme}}</strong></p>
	    <p>Carrera: <strong>{{datosForma.degree}} </strong></p>		 
	 	<p>Su e-mail es:<strong>{{datosGuardados.email}}</strong></p> 
	 </div>

</template>

<style>
	.card {
	  margin: 0 auto; /* Centra horizontalmente */
	  max-width: 590px;        /* Ancho máximo de la tarjeta */
      width: 490px;
      height: 385px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

    .space-btn {
	  margin-top: 20px;      /* Espacio superior entre campos */
	  margin-bottom: 20px;   /* Espacio inferior entre campos */
	  padding: 13px 28px;    /* Tamaño del botón: vertical x horizontal */
	  font-size: 1.2rem;     /* Letra grande */
	  border-radius: 8px;    /* Bordes redondeados para mejor estética */
	  background-color: #4CAF50; /* Color de fondo */
	  color: white;          /* Color del texto */
	  border: none;          /* Sin borde */
	  cursor: pointer;       /* Cursor tipo puntero al pasar encima */
	  transition: background-color 0.3s ease; /* Suavidad al pasar el cursor */
	}

	.ent-long {
	  display: block;            /* Hace que cada input esté en su propia línea */
	  width: 100%;               /* O puedes poner un ancho fijo como 400px si prefieres */
	  max-width: 500px;
	  padding: 12px 16px;        /* Espaciado interno grande */
	  margin-bottom: 20px;       /* Espacio entre inputs */
	  font-size: 1.1rem;         /* Letra más grande */
	  border: 1px solid #ccc;    /* Borde sutil */
	  border-radius: 6px;        /* Bordes redondeados */
	  box-sizing: border-box;    /* Evita que padding aumente el ancho total */
	}
	.modal {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  position: fixed; 
	  z-index: 100; 
	  left: 0;
	  top: 0;
	  width: 100%; 
	  height: 100%; 
	  background-color: rgba(0,0,0,0.5); 
	}
      /* rear un modal manualmente*/
	.modal-box {
	  background-color: #fff;
	  padding: 20px;
	  border-radius: 8px;
	  width: 90%;
	  max-width: 500px;
	  position: relative;
	}

	.modal-close {
	  position: absolute;
	  top: 10px;
	  right: 15px;
	  font-size: 20px;
	  font-weight: bold;
	  cursor: pointer;
	}

	.saved-info{
	  max-width: 600px;
	  margin: 30px auto;
	  padding: 20px;
	  background-color: #f3f3f3;
	  border-left: 4px solid #4CAF50;
	  border-radius: 6px;
	  font-size: 1rem;
	}

	/*.form-dividir{
	  margin-top: 30px; /* separa del formulario 
	  padding-top: 20px;
	}*/
	
	/** no afecte **/
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
</style>

<script>
	 import NetStatus from '@/components/NetStatus.vue';
	 export default {
	 	components:{
 		  	NetStatus,
 		},
	 	
	 	data(){
	 	  return{
	 	  	datosForma: {
	 	   	 name: '',
			 lnme: '',
			 degree: '',
			 age: '',
			 email: '',
			 passwd: '' //#aniadido recientemente
	 	   },
	 		mostrar_modal: false,
	 		datosGuardados: null,
	 		imageData: null  //refr-1
	 	  };

	 	},
	 	   
	 	methods:{
			sendForma(){
				// menos es mas, ya aseguro el email, cualq. validacion no interrumple el flujo
				this.consolidarEmail();
				 	  	 const {name,lnme,age,degree,email,passwd} = this.datosForma;
                  // Aqui no llamar a cosoli..., porque entra en juego la validacion
	 	  	   if (!name.trim() || !lnme.trim() || !age  || !degree || !email.trim()){
	 	  	   	 alert('No es posible enviar, completa todos los campos');
	 	  	   	  return; //interrumple el flujo hasta que la forma esté completa
	 	  	   }
	 	  	      // Validación de entero positivo
			       const edadNum = Number(age);
				  if(!Number.isInteger(edadNum) || edadNum <= 0) {
				    alert('La edad debe ser un número entero positivo.');
				    return;
				  }

	 	  	     // Simular pequena pausa antes de mostrar modal
	 	  	    setTimeout(()=>{
                 //Camb la bandera para cerrar
			     this.mostrar_modal = true;
	 	  	     },135);  //2 y medio segundo  

			  	//muestra la info abajo
			   this.readDataDOM();

	 		},  
	 		 // Cerrar la ventana emergente
	 		closeModal(){
	 			this.mostrar_modal = false;
	 			// Limpiar el formulario es aqui ya que la elima del modal pero debe prevalecer antes si lo hace dentro se limpia ante de que llege al modal y no se ve nada, o bien podria limp desp's de leer en DOM
			    this.cleanForma(); 
	 		},
             // Ver abajo de la forma
	 		readDataDOM(){
	 			// this.datosForma.id = Date.now();
	 			this.datosGuardados = {...this.datosForma };
                   //# Trabajo del LocalStorage  17 de Abril del 2024
	 				// Obtenemos los registros existentes del formu o iniciamos un nuevo array
	 			const alumnos_previos = JSON.parse(localStorage.getItem('alumnos-registrados')) || [];

	 			  // agregamos los regs en la mem local
	 			alumnos_previos.push(this.datosForma);
	 				// Alm's a los alumnos en la mem del navegador
	 			localStorage.setItem('alumnos-registrados', JSON.stringify(alumnos_previos));
	 			//# Trabajo del LocalStorage  17 de Abril del 2024
	 		},
             // Limpiar Info
	 		cleanForma(){
	 		   this.datosForma = {
		 	     name: '',
				 lnme: '',
				 age: '',
				 degree: '',
				 email: '',
				 passwd: '',
	 	   	   };  //es el momento ideal 1° limpia el formulario y desp descomp los datos capturad's, 
	 	   	   this.clearData();  
	 		},
	 			//Si se necesita preservar el ult registro comentar la 179.
	 		clearData(){
	 			this.datosGuardados = null;
	 		},

	 		guardarLastName(){
	 			localStorage.setItem("alumno-buscado", this.datosForma.lnme);
	 		},

	 		 // Generar automaticamente el correo Institucional
		 	consolidarEmail(){
	   		 		// Obtener la data carcteristica del usuario
		        const comp_ape = this.datosForma.name.toLowerCase().replace(/\s+/g, '');
		        const pmr_nom  = this.datosForma.lnme.charAt(0).toLowerCase().replace(/\s+/g,'');
		   		     // Unificar la data del usuario
		        const unify_user = `${pmr_nom}${comp_ape}`; 
		        const   dominio = 'alumno.institucion.mx';
		   		 	 // Obt el email por completo
		   		  this.datosForma.email = `${unify_user}@${dominio}`;
		   		     console.log('Institucional: ',this.datosForma.email);

		   		    /* let primerNombre = nombres.length === 2 ? nombres[0] : frmPba.nomb.toLowerCase().replace(/\s+/g, '');
		   		     const unify_user = `${primerNombre.charAt(0)}${apellidos}`; >> solo tomar un unico nombre*/
		 	},
		 	 // Metodos de la Imagen //refr-1 25.04-24
		 	   // Cargar Foto
		 	  onFileChange(event){
		 	  	 const file_img = event.target.files[0];
		 	  	   if(file_img && file_img.type.startsWith("image/")){
		 	  	   	   const img_lec = new FileReader();
		 	  	   	    img_lec.onload =()=>{
		 	  	   	    	this.imageData = img_lec.result;
		 	  	   	    	localStorage.setItem("alumno_Foto",this.imageData);
		 	  	   	    };
		 	  	   	    img_lec.readAsDataURL(file_img);
		 	  	   }else{
		 	  	   		alert('⚠️ Por favor, seleccione un formato de imagen válido.');
		 	  	   }
		 	  },

		 	   borrarImagen(){
		 	   	  this.imageData = null;
		 	   	  localStorage.removeItem("alumno_Foto");
		 	   }
	    }
	};

</script>