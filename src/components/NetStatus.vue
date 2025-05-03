<template>
	 <!-- Vista Componente para comprobar los Estados de Red -->
	<div>
		<div v-if="isOnline" class="alerta">
			 <p>Error: Conexión de red interrumpida. Verifique su router o contacte a su proveedor</p>
		</div>
		<div v-if="showRestoredMsg" class="restablecida">
			 <h3>La conexión ha sido Restablecidad Exitosamente</h3>
		</div>
		<div v-if="customError" class="error">
			<p> {{customError}} </p>
		</div>
	</div>
</template>

 <script>
 	export default{
 		 name: "NetStatus",

 		 data(){
 		 	 return {
 		 	 	isOnline: navigator.isOnline,
 		 	 	showRestoredMsg: false,
 		 	 	 customError: null,
 		 	 };
 		 },

 		 created(){
 		 	 window.addEventListener('online',this.handleOnline);
 		 	 window.addEventListener('offline',this.handleOffline);

 		 	   this.statusChecker = setInterval(this.checkCustomStatus, 9500);
 		 },

 		 beforeDestroy(){
 		 	window.removeEventListener('online', this.handleOnline);
 		 	window.removeEventListener('offline', this.handleOffline);
 		 	  clearInterval(this.statusChecker);
 		 },

 		 methods: {
	 		 	handleOnline(){   // La controladora en Linea
	 		 		this.isOnline = true;
	 		 		this.customError = null;
	 		 		this.showRestoredMsg = true;
		 		 		setTimeout(()=>{
		 		 			this.showRestoredMsg = false;
		 		 		}, 3000);
		 		 	},

	 		 		handleOffline(){  // La controladora fuera de Linea
	 		 			this.isOnline = false;
	 		 		},

	 		 		 checkCustomStatus(){   // Verificar el código de estado de Conexión de la Red
	 		 			 const fakeState = {
	 		 			 	net: 203,
	 		 			 	authError: false,
	 		 			 	degratedSignal: false,
	 		 			 };

	 		 			 if(fakeState.net === 203){
	 		 			 	this.customError = 'Error 203: El Servidor sobrepasó su capacidad.';
	 		 			 } else if(fakeState.net === 506){
	 		 			 	this.customError = 'Error 506: Fallo el Enrutamiento.';
	 		 			 } else if(fakeState.degratedSignal){
	 		 			 	this.customError = 'Señal Debil. Acerquese al router';
	 		 			 } else if(fakeState.authError){
	 		 			 	 this.customError=  'Error de autentificación. Verifique su cuenta Institucional.';
	 		 			 } else {
	 		 			 	this.customError = null;
	 		 			 }
	 		 		},
 		 },
 	};
 </script>

 <style>
 	.alerta{
 		background-color: #ffddcc;
 		padding: 1em;
 		color: red;
 		font-weight: bold;
 	}

 	 .restablecida{
 	 	background-color: #d4edda;
 	 	padding: 1em;
 	 	color: green;
 	 	font-weight: bold;
 	 }

 	 .error{
 	 	background-color: #fff3cd;
 	 	padding: 1em;
 	 	color: #856404;
 	 	font-weight: bold;
 	 }
 </style>