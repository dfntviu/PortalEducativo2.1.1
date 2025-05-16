<template>
	<div>
		<h3 id="title_welcome">Estás en Alumnos </h3>
		<p class="msg_transicion" :class="toogle_msg">Estamos cargando tú Sesión, Espera un momento</p>
	</div>

	<div>
		<h1 class="animar_centro desapared_leyenda">Facultad de Ingeniería</h1>
	</div>
</template>
<style scoped>
	 /** Animación 1 - Controlar el Mensaje de Espera **/
	#title_welcome{
		display: flex;
		justify-content: center; 
		align-items: center;
		color: #DDBBCC;
		font-size: 1.6rem;
		font-family:'Century Gothic', sans-serif ;
	}

	.msg_transicion:hover{
		animation: font-size 2s,  text-transform 3s;
	}
     /* lo hace automatico */
	.msg_transicion{   
		animation: texto_msg  4s infinite;
	}

	@keyframes texto_msg {
		0%{ /* dorado */
		  font-size: 2.6rem;
		  color: #FFD700;   
		},
		
		50%{ /* verde obsc */
		  font-size: 2.3rem;  
		  color: #006400;
		},

		100%{ /* marron **/
		   font-size: 2rem; 
		   color: #8B4513;
		}	
	}

	/* Animación 2: Animando el nombre de mí gloriosa Institución
	   Se reproduce una sola vez, continua infinitamente la 1° animacion */

	/* Centrado y animación de Entrada	*/
	.animar_centro{
		text-align: center;
		font-size: 1.8rem;
		color: #335577;
		animation: entrada_desde_arriba 2s ease-out;
	}
     /** Muestra animacion de  caida */
   @keyframes entrada_desde_arriba {
		0%{ /* */
		   transform: translateY(-50px);
		   opacity: 0;  /**  difuminar **/
		},
		 	
		100%{
		   transform: translateY(0px);
		   opacity: 1;  /**  quitar difuminado **/
		}	
	}

   /* Desaparición del Titulo lento **/
   .desapared_leyenda{
   	  animation:  ocultar_suave 5s ease-out 3s  forwards;
   }
    /** indagar mostrar unos segundos mas, apreciar la animacion **/
   @keyframes ocultar_suave {
		0%{ 
		  opacity: 1;
		}
		
		100%{ 
			opacity: 0;
		    visibility: hidden;
		}	
	}
   /** Todas las sugerencias, que a ustedes se les ocurran. Hagamenlo saber **/
</style>