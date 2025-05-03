<template>
	<!-- <h1>Frequency Ask Questions</h1> -->
	<section class="conteiner-center">
		  <h1 class="encabezado"  :class="{habilitado:mostrarAlumnos, animar:AnimandoAlumnos}" 
		     @click="toggleAlums">Alumnos
		  </h1>
		<div  v-if="mostrarAlumnos">
			<p><label >1.¿Es Posible subir cualquier Formato de material Digital?</label>
			    <span>No es posible el contenido Digital unicamente correponde a los siguientes Formatos: PPTX, DOCX, PDF</span>
			   <label >2.¿Existe un límite de subida para el Material Educativo?</label>
			   <span>10 Mbytes por contenido digital. Máximo 3 fichero por día</span>
			   <label >3.¿Es posible subir cualquier tipo de Material Educativo?</label>
			   <span>Sí todos, únicamente se tendrá la vista de Moderación con los profesores para determinar si el contendio es completo.</span>
			   <label >4.El registro. ¿Se deberá realizar por medio del Correo Institucional?</label>
			   <span>De preferencia sí, Porque por dicho medio será comprobado el registro en el Portal Educativo</span>
			   <label >5.Todos los miembros del Portal Educativo, ¿Se permitirá la visibilidad de las publicaciones?</label>
			   <span>Unicamente los profesores se les notificará sobre el contenido subido, con el propósito de mantener la relación
			   de material Educativo publicado.</span></p> 
		</div>
	</section>
	<hr>
	<section class="conteiner-center">
	      <h1  class="encabezado"  :class="{habilitado:mostrarProfesores, animar:AnimandoProfesores}"
	          @click="toogleProfs">Profesores 			
	      </h1>
		<div v-if="mostrarProfesores">
			<p>
			  <label >6. ¿Se debe capturar todas las categorías que contienen al Formulario Profesor?</label>
			    <span>Por lo menos las 3 primeras, ya que son vitales para que el Alumno constante los datos Básicos del Profesor al
			    Moderar la Publicación del Contenido Digital Educativo.</span>
			  <label >7. ¿Los profesores tendrán permiso de subir Contenido, al Portal Educativo?</label>
			    <span>No Directamente desde su sesión, Pero sí tendrá permitido proporcionarle el Material Educativo completo al Alumno.</span>
			  <label >8. En Moderación de Material. ¿El comentario deberá ser capturado obligatoriamente, posterior a su revisión?</label>
			    <span >Unicamente sí el material está incompleto, deberá fundamentarse en una longitud de 3 a 4 renglones como límite. Si el contenido
			  	 es aceptado, un rengló será suficiente.</span>
			  <label>9. ¿El contenido digital en la cuenta se mantendrá intacto y accesible. Cada vez que iniciemos sesión, sin verse afectado?</label>
			    <span>Por ahora, solo se mantendrá vigente la sesión. Porqué al Salir de ella. El Material Educativo se perderá.</span>
			</p>
			 <!-- <span>R=</span> -->
		</div>
	</section>
</template>

  <script>
	export default{
		data(){
			return {
				mostrarAlumnos: false,    //unable flasgs, for beggining
				mostrarProfesores: false,
				AnimandoAlumnos: false,		//para animar (unos instantes)
				AnimandoProfesores: false,

			};
		},
		methods:{
		  toggleAlums()
		  { 
			 this.mostrarAlumnos=  !this.mostrarAlumnos;
			 this.AnimandoAlumnos =  true;
			   setTimeout(()=>{	
			   	 this.AnimandoAlumnos = false;
			   },1500);

		  },
		  toogleProfs(){
		  	this.mostrarProfesores=  !this.mostrarProfesores;
		  	this.AnimandoProfesores =  true;
		  	setTimeout(()=>{	
			   	 this.AnimandoProfesores = false;
			   },1500);
		  }
		}
	};
  </script>

	<style>
		body {
				background-color: #f4f4f4; /* Gris claro*/
				margin: 0;
				font-family: sans-serif;
		}
		label{
			  font-size: 22px;
			  text-shadow: 1px 1px gray;
			  color: #0c9;
			  padding: 2px;
			  display: block;
		}

		span{
			margin: 6px 3px;
			font-size: 18px;
			color: black;
			text-align: justify;
			text-justify: inter-word;
			font-weight: bold;
		}

	    .encabezado{
	     color: #1b5e20; /* Verde oscuro */
	     text-transform: capitalize;
	     text-align: center;
	     font-size: 1.8em;
	     border-bottom: 2px solid #03c7; /* azul tenue */
	     font-family: 'Century Gothic', 'Avant Garde', sans-serif;
	  }

		 h1{
		 	  cursor: pointer;
			  padding: 10px;
  			  transition: background-color 0.3s ease, color 0.3s ease;
  			  background-color: #ddd;
			font-family: 'Tahoma', sans-serif;
			/* font-size: 1.6em; text-transform: capitalize; color: #c73e70*/
		 }

		/*Habilitar comenzar el efecto dinamico (Toogle-Tittle)*/
			 h1.habilitado{
			 	background-color: crimson;
			 	color: white;
			 }
			/*Animacion temporal*/
			 h1.animar{
			 	animation: intensificar 1.5s ease;
			 }
          /** comenzar el loop de animacion **/
		@keyframes intensificar {
			  0% {
			    background-color: #ddd;
			  }
			  50% {
			    background-color: #aaa;
			  }
			  100% {
			    background-color: #ddd; /*regresa a su forma base*/
			  }
		}

	    .conteiner-center{
	 	  display:flex;
		  flex-direction: column;
		  align-items: center;
		  justify-content: center;
		  margin: 0 auto;
		  box-sizing: border-box;
		  max-width: 800px;
		  padding: 20px;		 	
	    }
	   /*label, span { display: block; }*/
	</style>

	