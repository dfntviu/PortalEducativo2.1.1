   <!-- archivo ideado LocalStorage y la Reactividad  17 de Abril del 2024  -->
 <template>
   <h2>Catálogo de Alumnos Registrados</h2>
    <div class="container-catg">
    	<div v-for="(alumno,idx_alum) in alumnos" :key="index" class="students-stge">
    		   <!-- <p class="studen-inf">Foto: {{alumno.imageData}} </p> -->
           <p class="student-inf"><span>Nombre-Completo: {{alumno.name}} {{alumno.lnme}}</span></p>  <!-- //erno-2 interpolacion afuera-->
    		<p class="student-inf"><span>E-mail:{{alumno.email}}</span> </p><!-- /erno1 tenia correo, es email- -->
    		<p class="student-inf"><span>Edad: {{alumno.age}}</span></p>
    	</div>
    </div>
 </template>

 <script setup>
 			import  {ref, onMounted} from 'vue';
				    const alumnos = ref([]);  //erno-3 es identico al valor de la directiva
				    // const image = ref();

				  onMounted(()=>{
				  		const data = localStorage.getItem('alumnos-registrados');
				  			if(data){
				  				  alumnos.value = JSON.parse(data);
				  			}else{
				      		alert("NO HAY Alumnos registrados Aún");
				  			}

				  });
				  		// const data_im = localStorage.getItem('alumno_Foto');
				     // Algorito
				  /* Opc1: - Por Obj Array
				          1. Agregar atributo como llave del array
				          2. enviar al mismo arr del LStge
				          3. rendereizar aqui  pero con imagen
				           3-1.parsear para pasarlo a img
				           3-2. accceder por su email reactiva
							  -> Opc2: - tratamiento independiente
							     1 conservar la log actual
							     2 acceso directo image
							     3. descomponer img, Storage - Image
							     4. renderizar  */
 </script>
 
 <style scoped>
  
  h2 {
	  padding: 10px 0;
	  color: #1b5e20; /* Verde oscuro */
	  text-transform: capitalize;
	  text-align: center;
	  font-size: 1.8em;
	  border-bottom: 2px solid #ffd600; /* Dorado brillante */
	  margin-bottom: 20px;
  }

	.container-catg {
	  display: flex;
	  flex-wrap: wrap;
	  gap: 20px;
	  justify-content: center;
	}

  .students-stge {
	   background-color: #e8f5e9; /* Verde muy claro */
	   border-left: 5px solid #ffd600; /* Dorado */
	   border-radius: 8px;
	   padding: 15px 36px;
	   width: 280px;
	   box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
   	 transition: transform 0.2s;
  }

	.students-stge:hover {
	  transform: scale(1.03);
	  background-color: #c8e6c9; /* Verde más notorio al hacer hover */
	}

	p {
	  margin: 5px 0;
	  color: #2e7d32; /* Verde intenso */
	  font-size: 1em;
	  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	  white-space: nowrap;
	}

	strong {
	  color: #f9a825; /* Dorado más oscuro y cálido */
	}

 	.student-inf{
 		display: grid;
 		grid-template-columns: repeat(2, 1fr);
 		gap: 5px 15px;
 		 color: #2e7d32;
 		  font-size: 1em;
 		  margin: 10px 0;	
 	}

 	.student-inf span {
    background-color: #fffde7; /* fondo dorado claro */
    padding: 5px 10px;
    border-radius: 5px;
    color: #33691e; /* verde oscuro */
    font-weight: bold;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
  }
  
 </style>