<template>
	<h2 class="tit-gnrl">Cargar Archivo Electrónico</h2>
	<div class="">
		<h2 class="subtit-gnrl">Área de Revisión</h2>
		<div  v-if="!reviews.length" class="mensaje-error">
			<p>No se ha Encontrado Material Educativo aún. Por favor, carga uno primero</p>
		</div>

		<div  v-else class="panel">
				<div  v-for="(review,ide_rev) in reviews" :key="ide_rev" class="card-revision">
					 <h3  class="tit_gnrl_cards">Material Publicado</h3>
					 <p><strong>Título: <span class="destacado subtit-gnrl">{{ review.titulo_lib }}</span> </strong></p>
					 <p><strong>Alumno: <span class="destacado subtit-gnrl">{{ review.apellido  }}</span> </strong></p>
					 <p><strong>Fecha: <span class="fecha_st">{{review.date}}</span> </strong>  </p>
					 <button type="button" class="btn-publicar">Publicar</button>
					 <iframe   v-if="review.file" 
					           :src="review.file"  
					 		  width="575px" height="590px" 
					 		  style="border: 1px solid #aaa; border-radius: 8px;"
					 		  type="application/pdf"
					 		  >
					</iframe>
					<p v-else class="error-pdf">⚠️ No se pudo mostrar el archivo PDF.</p>
				</div>
				 
		</div>
	</div>		
</template>

<script setup>
	 import	 {ref, onMounted} from 'vue';

	 const reviews = ref([]);


	function viewDigitalContent(){
	 	 	const materiales =	 JSON.parse(localStorage.getItem('materiales-educativos'))||[];
	 	 	// const    alumnos =	 JSON.parse(localStorage.getItem('alumnos-registrados'))||[];


	 	      const alumno_tst_ap = "Rebanios";
	 	    const material_tst_tit = "AprendeJS";

	 	   /* const rv_material =  materiales.find(mb=>mb.title === material_tst_tit );
	 	    const     rv_alumno =     alumnos.find(ab=>ab.lnme  === alumno_tst_ap);

	 	    if( !rv_material  || !rv_alumno){ */
	 	    if(materiales.length ===0){
	 	    	reviews.value = [];
	 	    		return;
	 	     }//else{
	 	    	reviews.value = materiales.map((mat) =>({
		 	    	   apellido : mat.last_name,
						 titulo_lib	: mat.title ,
						 date	:  mat.date,
					   		file : mat.file  || null,// pdfBase64 directo como fuente
	 	    		 	  }));
	 	    // }
	}

	onMounted(()=>{
	 	viewDigitalContent();	
	});
	
</script>

 <style scoped>

 	.container-pnl-rev{
 	   max-width: 45vw;
	  max-height: 35vh;
 	  padding: 20px;
 	  text-align: center;
 	}

 	.panel{
	  display: grid;
 	  grid-template-columns: repeat(2, 1fr);
 	  gap: 35px;
 	  padding: 20px;
 	  align-items: center;
 	  flex-direction: column;
 	  /* display: flex;
	  justify-content: center;*/
 	}

 	.card-revision{
 		 margin: 20px auto;
 		padding: 20px;
 		max-width: 800px;
 		 border: 1px solid #ddd;
 		border-radius: 12px;
 		  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		  background: #fdfdfd;
		  text-align: left;
 	}

 	.destacado{
 		color: #31708f;
 		font-weight: bold;
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

  	.tit_gnrl_cards {
	   padding: 10px 0;
	   color:#3a87ad;
	   text-transform: capitalize;
	   text-align: center;
	   font-size: 1.8em;
	   border-bottom: 2px solid #cd4c; /* Dorado brillante */
	   margin-bottom: 13px;
	   font-family: 'Tahoma', 'Avant Garde', sans-serif;
    }

    .fecha_st{
            color:#c21709;
	        font-size: 1.2em;
	    border-bottom: 2px solid green;
	      font-family:  'Century Gothic', 'Times New Roman', cursive;
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

 	.btn-publicar{
 		margin-top: 15px;
  		padding: 10px 20px;
  		border: none;
  		background-color: #31708f;
  		color: white;
  		border-radius: 8px;
  		 cursor: pointer;
  		  display: block;
/*    	  margin-left: auto;*/
    	  margin:  17px auto;
 	}

 	.mensaje-error{
 		 color: crimson;
 		 font-weight: bold;
 		 padding: 2rem;
 		 background: #fef2f2;
		 border: 1px solid #f5c2c2;
		 border-radius: 8px;
 	}

 	.error-pdf {
	  color: red;
	  font-style: italic;
	}
  
		/* Resposividad en Telefonos [no se ajusta muy bien, se pierde margen de base64(pdf)]  */
  	/*@media (max-width: 675px) {
		  .container-pnl-rev {
		    overflow-x: auto;
		  }       
	    .panel{
	  	   overflow-x: auto;
	  	   overflow-y: auto;
	      grid-template-columns: repeat(2,1fr);
			     grid-template-rows: auto;
		       gap:20px;
	    }

	    .card-revision{
 		    margin: 12px auto;
	 		  padding: 12px;
	 		  width: 95%;
	 		  max-width: 95vw; 
	 		  min-width: 160px;
	 		  border: 1px solid #ddd;
	 		  border-radius: 12px;
	 		  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
			  background: #fdfdfd;
			  text-align: left;
 	    }

 	    iframe{
 	  	  width: 308px;
 	  	  height: 288px;
 	    }
    }*/
    
 </style>