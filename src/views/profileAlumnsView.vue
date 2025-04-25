<template>
		<h2 class="tit-gnrl">Mostrar Perfil</h2>
	<div>
	<!-- Seccion p/Mostrar Formulario Datos Personales  -->
		<form @submit.prevent="changeInfBasic">  <!--evitar la redireccion-->
			<div id="camb-info" class="card sect-regist">
				<h1 class="tit-sec">Personal</h1>
		  <input  v-model="datosProf.nom_prof" class="ent-text" type="text" readonly>
		  <input  v-model="datosProf.ap_matr" class="ent-text" type="text"  readonly>
		  <input  v-model="datosProf.carrer" class="ent-text" type="text"  readonly>
		  <input  v-model="datosProf.edad" class="ent-text" type="text"  readonly>
		 <input  v-model="datosProf.e_mail" class="ent-text"   type="text" placeholder="E-mail" readonly>
			</div>			    
		 
		</form>
		
		<div class="card sect-regist">
		      <h2 class="tit-sec">Cambiar Contraseña</h2>
			<div>
				<label class="lbl_style">Contraseña Actual</label>
				<input type="password" class="ent-text" v-model="passwd_current">
			</div>
			<div><label class="lbl_style">Nueva Contraseña</label>
				<input type="password" class="ent-text"  v-model="new_passwd">
			</div>
			<button @click="changePassword">Modificar</button>
			<!-- <p v-if="mensaje" :class="{ error: sMistake, exito: !sMistake }">{ mensaje }}</p> -->
			<p  v-if="message" :class="tipoMsg">{{message}}</p>  <!--sustituyo a la 27 -->
		</div>
	</div>
	
</template>

<script setup>
	import { ref, reactive, onMounted } from 'vue';
    
    const alumno = ref(null);
    // const datosCargados = ref(false); -> {active with f(n) renderX..}

	  // Definit de las opciones como un objeto vacio
   const datosProf = reactive ({
      	   nom_prof: '', 
      	    ap_matr: '',  
      	   carrer: '',
      	     edad: null,
      	   e_mail: ''
      });
   	  // validacion por Indice del [LStge - array]
	function changeInfBasic(){
		console.log('Cargando los Datos del Alumno',);

		const data = JSON.parse(localStorage.getItem('alumnos-registrados'));

		  	if(data && data.length>0){
		  	 alumno.value = data[0];
				console.log('Datos Cargados Reactivos:',data[0]);   //(cambiar a la 1er posicion > 0)
			  	// if(data[0]){
			  	 	datosProf.nom_prof =  data[9].name || ''; 
			  	 	datosProf.ap_matr =  data[9].lnme || '';
			  	 	datosProf.carrer =  data[9].degree || '';
			  	 	datosProf.edad =  data[9].age || '';
			  	 	datosProf.e_mail =  data[9].email || '';
	         // console.log('Nm-',data[0].name,'ap',data[0].lnme,'Ed -',  'Carrera:',data[0].degree, data[0].age,'core-',data[0].email);
		  	}
	}	
	// validacion por credencial de Sesion

    function renderXSessionInit(){
    	//  inicializar bandera
    	// #const datosCargados = ref(false) [no activar];
    	 const email_usuario = localStorage.getItem('usuario-loggeado');
    	 const list_usuarios = JSON.parse(localStorage.getItem('alumnos-registrados'));

    	  if(!email_usuario || !list_usuarios){
    	  	 alert('Error: No se Encontró una Sesión de Alumno activa');
    	  	   return
    	  }
    	  	// Buscar en todos los registers del LStorage
    	   const  usuarioActivo = list_usuarios.find(ac => ac.email === email_usuario);

    	   if(!usuarioActivo){
    	   	  alert('Lo Siento: El correo no corresponde con ningun Alumno Registrado');
    	   }

    	   //renderizar sus datos correspondientes
    	   		   datosProf.nom_prof = usuarioActivo.name || ''; 
			  	 	datosProf.ap_matr = usuarioActivo.lnme || '';
			  	 	datosProf.carrer =  usuarioActivo.degree || '';
			  	 	datosProf.edad =    usuarioActivo.age || '';
			  	 	datosProf.e_mail =  usuarioActivo.email || '';
			  	//  actualizar bandera
			  	 	const datosCargados = true;
    }
		onMounted(()=>{
			changeInfBasic();
		});
	 
	 //Dec. constantes Locales
 	 
 	 const passwd_current = ref('')
 	 const  new_passwd = ref('')
 	 const save_passwd = ref('')  //alm en memoria
 	 // Dec de Stgs & Flag
 	 const message = ref('')
 	 const tipoMsg = ref('')
 	 // const sMistake = ref(false)  // pertenecia a la 27
 	 // const advCampoIncomplet = ref(false)  alerta campos

	 // f(n) Main Control de password
	function changePassword(){
	 	  /*if(!camposCompletos()){ mostrarMensaje('Por favor completa Ambos campos'); return; } */

		   //   3 colores de alerta, nuevo color para advertir
	 	  if (!camposCompletos()) {		// advCampoIncomplet.value = true
	  		    mensajeAdvertencia('⚠️Por favor completa ambos campos.', 'warning') // Vacío para evitar mensaje rojo duply
  				return
			}
			  // #a la segunda vez, a menos q ya haya 1 passwd guardada de por 1/2
	 	     if(!save_passwd.value){
 	  	 	  	  // Se guarda lo ingresado como actual
 	  	 	  	 save_passwd.value = passwd_current.value;
	 	  	}

	 	  	if(!contrasenaCoincide()){
	 	  	   mensajeAdvertencia('La contraseña Actual no coincide.', 'error')
	 	  	     return
	 	  	}

	 	  	if(!nuevaPasswdDistinta()){
  		 	  	  mensajeAdvertencia('La nueva Contraseña debe ser Diferente de la Actual','error')
  		 	  	   return
	 	  	}
              // Guradar la nueva contrasenia
	 	  	save_passwd.value = new_passwd.value;
	 	  	 mensajeAdvertencia('¡Muy Bien,La Contraseña fue modificada Exitosamente! ','exito');
	 	  	 // Limpiar los campos
	 	  	 passwd_current.value = '';
	 	  	 new_passwd.value = '';
	 	   console.log('El cambio de su Contraseña, fue efectuado Exitosamente');
	}

	 /*  --- f(n)s Auxiliares ---
	    function mostrarMensaje(texto, error = false){
	   	  message.value = texto
	   	  sMistake.value = error
	    }*/
			//sustituyo a la 145-148
	    function mensajeAdvertencia(txt_wng, tipo=''){
	    	  message.value = txt_wng
	    	  tipoMsg.value = tipo
	    }

	  function camposCompletos(){
	  	 return passwd_current.value && new_passwd.value;
	  }

	  function contrasenaCoincide(){
	  	 return passwd_current.value === save_passwd.value;
	  }

	   function nuevaPasswdDistinta(){
	  	 return new_passwd.value !== passwd_current.value;
	  }	

</script>

<style scoped>
	
	.card {
	  margin: 0 auto; /* Centra horizontalmente */
	  max-width: 550px;        /* Ancho máximo de la tarjeta */
      width: 458px;
      height: 388px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      font-family: Arial, sans-serif;
    }

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
		/* Init - Manipular el estado de la Contrasenia [MEC] */
	  .error{
	  	color: red;
	   }
	   .exito{
	  	color: green;
	   }
	   /* Estado advertencia */
	   .warning {
  			color: #FBC02D; 
  			font-weight: bold;
  			margin-top: 10px;
		}
	    .lbl_style{
	    	display: block; /**centrar: 2 props **/
	    	text-align: center;
	   	  font-family: Tahoma, sans-serif;
  		    font-size: 12px;
  		    color: #1A4FB4; /* azul rey semiintenso */
	    }
      /* Fin - MEC*/
  	.tit-sec{
  		text-align: center;
  		font-family: 'Tahoma', monospace;
  		font-size: 1.5em;
  		color: #4cff;
  	}

	.subtit-gnrl {
	   padding: 3px 0;
	   color: #444; /* Verde más claro */
	   text-align: center;
	   font-size: 1.1em;
	   font-weight: 100;
	   margin:-3px 76px;
 	   font-weight:bold;
 	   font-family:  Georgia, 'Times New Roman', serif;
	}

	.sect-regist{
      padding: auto 33px;
      width: 90%;
      margin: 9px auto;
	}	
	.ent-text {
	  display: block;            /* Hace que cada input esté en su propia línea */
	  width: 90%;               /* coloc el ancho fijo como 400px preferible */
	  max-width: 400px;
	  margin: 10px auto;       /* Espacio entre inputs */
	  padding: 12px 16px;        /* Espaciado interno grande */
	  font-size: 1.1rem;         /* Letra más grande */
	  border: 1px solid #ccc;    /* Borde sutil */
	  border-radius: 6px;        /* Bordes redondeados */
	  box-sizing: border-box;    /* Evita que padding aumente el ancho total */
	}
  
    	button{
  		  padding: 10px 15px;  /*10px 15px; */
		    margin-top: 15px;
		    background-color: #0d3e;
		    color: white;
		    border: none;
		    border-radius: 5px 3px;
		    cursor: pointer;
		    font-size: 16px;   
		    font-weight: 500;   
		    width: 72%;
		    transition: background-color 0.3s ease;
  			width: 145px;
			display: block;
    	    margin: auto auto;
  		} 
</style>