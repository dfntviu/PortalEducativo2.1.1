<template>
		<!--<div class="modal-box">??
			   <h2>Material Reciente</h2>
			  <p>El usuario:<strong>alumico10mo</strong></p>   
			  <p>Público recientemente:<strong>Exercises VLANs Nets</strong></p>	
			  <textarea name="extracto" class="resumen"></textarea>   
			  <li><a href=""> <strong>Material Completo</strong></a></li>
			  <p>En la Fecha: <strong>15/04/2024</strong> </p>
		</div> -->
	 
	<div class="pnl-aparente">
		<h1 id="title">Notificaciónes Acerca del Material</h1>
		  <div v-for="(notif, index) in notificaciones" :key="index" class="inf-emergente">
		  	<p><strong>Información del Usuario:</strong> {{notif.nombre_completo}}  
		  		perteneciente a: {{notif.nm_carrera}}
		  	</p>
		  	<p><strong>Material:</strong>
		  		Publicó un {{notif.tipo}}  nombrado: "{{notif.titulo}}""  el día: {{notif.fecha}}
		  	</p>

			<a :href="notif.archivo" target="_blank">Ver Material</a>
		  </div>

		<!-- <div class="inf-emergente">
			<p><strong>inf-al_repescto</strong>rmontes perteneciente  a IEL 
			 </p>
			<p><strong>inf-al_repescto-cont-digital</strong>
			Publicó el PDF {aprende Arduino en 1 mes}</p>
			<a href="/carruseles-publicados">Ir</a> 
		</div>
		<div class="inf-emergente">
			<p><strong>inf-al_repescto</strong> proman perteneciente a IME 
			</p>
			<p><strong>inf-al_repescto-cont-digital</strong>
                 Publicó la Presentación {Conversiones Hexadecimales}
			</p>
			<a href="/carruseles-publicados">Ir</a>
		</div>-->
		
	</div>
	<h3  class="valid_dat" v-if="notifyUserMsg"> Contenido Vacío¿Te gustaria subir el primer Material Educativo, en el Portal? </h3>
	<!-- <div class="pagination">
		  <a href="" class="paginate">1 </a>  <a href="" class="paginate">2 </a>  <a href="" class="paginate">3 </a>
	</div> -->
</template>

<style scoped>
	 .pnl-aparente{
	 	padding: auto 9px;
	 	margin: auto 32px;
	 	color: skyblue ;
	 	border: 1px solid;
	 }

	.inf-emergente{
		margin: 3px auto;
	 	border: 9px 7px solid;
	 	padding: auto 32px;
	 	color:grey;
	 	max-height: 135px;
	 	max-width: 479px;
	   border: 1px solid;	
	}
	/* Se colisiona el principal, para que prevalezcan todas las props*/
    #title{
    	  text-align: center;   	    
		  text-transform: capitalize; 
		  color:#4A5F4D;
    }

    .valid_dat{
   	  color: crimson;
   	  font-size: 18px;
   	  padding: 5px auto;
   	  border: 2px  dashed #2ab;
   	  background-color: #f9da;
   }
</style>

<script setup> 
	 import { ref, onMounted } from 'vue';

	// Vinculamos el script originario con la vista de notificaciones(que renderizará)
	
	const notificaciones = ref([]);
	const notifyUserMsg = ref(false);
	
	onMounted(()=>{
	   
	   const    alumnos =  JSON.parse(localStorage.getItem('alumnos-registrados')) || [];
	   const materiales =  JSON.parse(localStorage.getItem('materiales-educativos')) ||[];
	   // Iniciamos la vinculacion de alumnos de ambas vistas
	    materiales.forEach((material) => {			
	   		const alumno = alumnos.find(al=> al.email === material.user_Id  || al.lnme === material.last_name);

	   		if(alumno){
	   		 	notificaciones.value.push({
	   		 		nombre_completo: `${alumno.name} ${alumno.lnme}`,
	   		 		nm_carrera: alumno.degree,   // campo adicional al registro
	   		 		tipo:  material.classification,
	   		 		titulo: material.title,  
	   		 		fecha: material.date,
	   		 		archivo: material.filename  //el nombre, prob'e alojado me lo desp en otra ventana, (variar por fileUrl)
	   		 	});
	   		 	notifyUserMsg.value = false; //ocultar el msg.
	   		}
	   			
	    });
	});// Desp de que se ejecute multiples veces. asegurarse de que ya culmino de subir material
		if(notificaciones.value.length === 0){
			notifyUserMsg.value = true; // Oculta el mensaje, hasta q al menos se suba un material
		}else{
			notifyUserMsg.value = false; // si sigue sin datos
		}
	
</script>