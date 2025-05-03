<template>
	 	 <h3>Tablero de Publicaciónes</h3>
	 <PanelMatEducativo/>
	 <hr>

	 <div class="tab-buttons">
	 	 <button v-for="tab in tabs" :key="tab" 
	 	 :class="{ active: activeTab === tab}"
	 	 @click="activeTab= tab"> {{tab}}</button>
	 </div>
	 <!-- Contenido de Paneles -->
	 <div class="tab-content">
	 	<div v-if="activeTab === 'puntuar'">
	 		<PuntuarPanelPubl></PuntuarPanelPubl>
	 	</div>
	 	<div v-if="activeTab === 'moderar'">	 	
	 		<ModerarPanelPubl></ModerarPanelPubl>
	 	</div>

	 	<div v-if="activeTab === 'comentar'">
	 		<ComentarPanelPubl></ComentarPanelPubl>
	 	</div>
	 </div>
	 	<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> -->
</template>

<script setup>
	import PanelMatEducativo from '../components/PanelMatEducativo.vue';
	import PuntuarPanelPubl from '../components/PuntuarPanelPubl.vue';
	import ModerarPanelPubl from '../components/ModerarPanelPub.vue';
	import ComentarPanelPubl from '../components/ComentarPanelPubl.vue';	

	import { ref } from 'vue';

  	const tabs = ['puntuar','moderar','comentar']
  	const activeTab = ref('')  //panel sin predeterminado

	console.log('Logica de Componente Panel - En curso');
</script>

 <style scoped>
 	.tab-buttons button {
  margin-right: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: #eee;
}
.tab-buttons button.active {
  background-color: #4285f4;
  color: white;
}
.tab-content {
  margin-top: 20px;
}
 </style>