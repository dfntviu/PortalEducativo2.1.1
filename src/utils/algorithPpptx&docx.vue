<script setup>
	 import { ref, onMounted } from 'vue';

	 const reviews = ref([]);
	 const selectedMaterial = ref(null);
	 const viewerUrl = ref(null);
	 const supportTypes = ['pptx', 'docx'];  //nw

	    function getFileExtension(fileUrl = ''){
	   	  return fileUrl.split('.').pop().split('?')[0].toLowerCase();
	    }

	    function generateViewUrl(fileUrl){
	   	 return `https://view.officeapps.live.com/op/embed.aspx=?src=${encodeURIComponent(fileUrl)}`; //nw
	    }

	    function viewDigitalContent(){

	   	   	if(materiales.length ===0){
   	 	    	reviews.value = [];
   	 	    	selectedMaterial.value = null;
   	 	    	viewerUrl.value = null;	
   	 	    	 return;
   	 	    }
	   
	   	   reviews.value = materiales.map((mat) =>({
	   		 	    	   apellido : mat.last_name,
	   					  titulo_lb	: mat.title,
	   						 fecha	:  mat.date,
	   					   	   file : mat.file  || null,
	   					   	   tipo : mat.type || getFileExtension(mat.file || '') //nw
	   	 	    		 	  }));

	   	   // Buscamos material esp. p/efectual el cambio dinámico
	   	    const coincidencia = materiales.find(
	   	    	(mat) => mat.last_name === 'Rebanios' && mat.title === 'GuíaJavaScript'
	   	    );

	   	    if(coincidencia && coincidencia.file){
	   	    	 const ext = getFileExtension(coincidencia.file);

	   	    	  if(supportTypes.includes(ext)){
	   	    	  	  viewerUrl.value = generateViewUrl(coincidencia.file);
	   	    	  	    selectedMaterial.value = coincidencia;  //nw-lrn
	   	    	  }else {
	   	    	  	 viewerUrl.value = null;
	   	    	  	 selectedMaterial.value = null;
	   	    	  	  console.warn('Tipo de archivo no soportado', ext);
	   	    	  }
	   	    }
	    }
  
     onMounted(()=>{
     	viewDigitalContent();
     });


</script>

<template>
  <div>
    <h2>📚 Materiales educativos</h2>

    <ul>
      <li v-for="(item, idx) in reviews" :key="idx">
        <strong>{{ item.apellido }}</strong> – {{ item.titulo_lb }} ({{ item.fecha }}) - {{ item.tipo }}
      </li>
    </ul>

    <div v-if="viewerUrl">
      <h3>📝 Visualizando: {{ selectedMaterial.title }}</h3>
      <iframe
        :src="viewerUrl"
        width="100%"
        height="600px"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>

    <div v-else>
      <p>⚠️ No hay material compatible para visualizar o no se encontró el archivo.</p>
    </div>
  </div>
</template>