<template class="formulario-view">
	<h1 class="tit-gnrl">Tendencias Actuales </h1>
	<div class="container-head">
		  <h5 class="subtit-gnrl">Publicaciónes Carrusel</h5>
			<!-- Maquetado del Menu -->
		   <nav   class="ent-long">
		   	 <li>Actuales</li>
		   	 <li>Anteriores</li>
		   	 <li>destacadas</li>
		   </nav>
		<!-- s<button type="submit">Mostrar</button> -->
	</div>

	<!--<PanelMatEducativo>--> <PanelMatEducativo/> 

	<!-- Maquetado static d  panels d articls
  <div class="container-pnl">
   	<div  class="panel">
		<div class="modal-box">
			   <h2>Material Reciente</h2>
			  <p>El usuario:<strong>alumico10mo</strong></p>   
			  <p>Público recientemente:<strong>Exercises VLANs Nets</strong></p>	
			  <textarea name="extracto" class="resumen"></textarea>
			  <li><a href=""> <strong>Material Completo</strong></a></li>
			  <p>En la Fecha: <strong>15/04/2024</strong> </p>
		</div>	</div> </div> -->
</template >

<script setup>
	import PanelMatEducativo from '../../components/PanelMatEducativo.vue';
	 // });

</script>

<style scoped>
	.formulario-view {
	  padding: 2rem;
	  background-color: #f4faff;
	  font-family: 'Segoe UI', sans-serif;
	}

	.tit-gnrl {
	  text-align: center;
	  color: #0a3d62; /* Azul oscuro */
	  font-size: 2rem;
	  margin-bottom: 1rem;
	}

	.subtit-gnrl {
	  color: #e1a300; /* Oro */
	  font-size: 1.25rem;
	  margin-left: 1rem;
	}

	.container-head {
	  display: flex;
	  flex-direction: column;
	  margin-bottom: 2rem;
	}

	.ent-long {
	  display: flex;
	  gap: 1rem;
	  margin-top: 0.5rem;
	  margin-left: 1rem;
	  list-style: none;
	  padding: 0;
	}

	.ent-long li {
	  background-color: #0a3d62; /* Azul oscuro */
	  color: white;
	  padding: 0.5rem 1rem;
	  border-radius: 12px;
	  cursor: pointer;
	  transition: background-color 0.3s;
	}

	.ent-long li:hover {
	  background-color: #145da0;
	}

	/*
	.panel:hover 

	.modal-box {
	  padding: 1rem 1.2rem;
	}*/

	.modal-box h2 {
	  color: #44bd32; /* Verde */
	  font-size: 1.3rem;
	  margin-bottom: 0.5rem;
	}

	.modal-box p {
	  margin: 0.3rem 0;
	  color: #34495e;
	}

	.modal-box strong {
	  color: #e1a300; /* Oro */
	}

	.modal-box textarea.resumen {
	  width: 100%;
	  height: 70px;
	  resize: none;
	  margin: 0.5rem 0;
	  padding: 0.5rem;
	  background-color: #eafaf1;
	  border: 1px solid #b7e4c7;
	  border-radius: 8px;
	  font-family: inherit;
	}

	.modal-box a {
	  color: #0a3d62;
	  text-decoration: underline;
	  font-weight: bold;
	}

	.modal-box a:hover {
	  color: #2980b9;
	}
</style>