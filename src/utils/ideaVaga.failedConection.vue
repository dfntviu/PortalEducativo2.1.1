<template>
	<div v-if="conexEnabled"></div>
		<h3>Su conexión ha sido restablecida Exitosámente</h3>

		<div v-if="conexDisabled">
		    <p>Error: Lo Sentimos la conexíón de la red se ha detenido. Revise El router, o comuniquese con 
		 	   su Proveedor de Servicios</p>
		</div>	
</template>

<script>
	export default{
		data(){
			return {
				conexEnabled: false,    //unable flags, of connection for start
				conexDisabled: false,

			};
		},
		methods:{
			conexionActived(){
				this.conexEnabled = true;

				// Emitir un mensaje grafico. Mostrando al Alumno final, que no es posible realizar cualq. cambio debido a la pérdidad de señal,
				// Ineficiencia de la red, o desconexión de la misma
				  if(conexDisabled){
				  	 alert('Lo sentimos, Tú conexión fue Desactiva, o no tu Servicio ha sido Desconectado');
				  }else if(ServicesDisconects()){
				  	  console.alert('Estamos Diagnosticando los errores en su Conexión. Espere un momento');
				  }

			},
			conectionDesactived(){
				this.conexDisabled = true;
			}

			ServicesDisconects(){
				if(signalStatus.actived){
				  console.log('La conexión fue restablecida Exitosamente');
				}
				if(degratedSignal === 606){
					alert('Error de Debilitamiento de Señal. Acercate un poco mas al Router de conexión');
				}else if(degratedSignal !== 606){
					else if(State.net === 200){
						alert('Error: Su conexión fue Desconectado Abruptamente');
					}else if(State.net == 506){
						alert('Error: de Ruteo: La ruta no fue vínculada Correctamente. Comuniquese con el Lider del Proyecto');
					}else if(State.net ===203){
						alert('La vista aún no está Dispobile: El servidor fue colapsado, sobrepaso la capacidad de FireBaseStorage');
					}
				}else  if(validacionProfesores.stgeProfs || validacionAlumnos.stgeAlumns){
					 console.log("ERROR: Se ha diagnosticado, Erorres de Autentificación. Porfavor, verifique que se haya activado correcamente su correo Institucional.")
				}
			}
		}
</script>