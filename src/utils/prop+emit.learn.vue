 <template>
 	<select >
 	   <option  v-for="alumno in students" :key="alumno.nmes">
 	   		 {{alumno.nmes}}
 	   </option>
 	</select>


 	<!-- Del Paso (3 y 4) -->
 	<select >
 	   <option  v-for="material in name" :key="material.tittle">
 	   		 {{material.tittle}}
 	   </option>
 	</select>


 	<!-- Del Paso 5a) -->
 	<h2>Titulo</h2>
 		<button @click='enviar'>Moderar</button>
	<!-- Del Paso 5b) -->
	 <PuntuarPanelPub @enviarMaterial="materialPRevisar=$event"/>
	 <ModerarPanel :material='materialPRevisar'/>
	 <!-- Del Paso 5c -> [Pnl Padre] -->
	 <textarea v-if="material"> {{material.tittle}} </textarea>


 </template>

 <script setup>

 	/*P1: Recuperar las credencias del Profesor */
	 const email_user = localStorage.getItem('usuario_prof_loggin')?.trim();
     const register_list =   localStorage.getItem('alumnos-registrados') ||'[]';

     const professor_encontrado = register_list.find(alum => alum.email === usuario && alum.passwd === contrasenia );


     // Paso 2:  Interpolar a los Alumnos registrados
       import {reactive}  from 'vue';


       cosnt studentes = reactive(
       				JSON.parse(localStorage.getItem('alumnos-registrados')) ||'[]'
       			);

      // Paso 3: Recuperar los materiales Educativos
        const render_mat_educativ = JSON.parse(localStorage.getItem('materiales-educativos') || '[]';


       // Paso 5 Comuncicación entre Paneles
        	
        	// 5a [Simulando al Panel Hijo - P_Puntuar.vue]

       const emit = defineEmit( ['enviarMaterial']);
       const titulo = ref('');


       function enviar(){
       	  emit('enviarMaterial', {tittle:title.value});
       }

       // 5b [Simulando al Panel Hijo - P_Puntuar.vue]
          const props = definePropsI({
          	material:Object
          });

        // 5c Importar libreria de c/Pnl Componente
          import {ModerarPanel} from '@/components/ModerarPanel.vue'
          import {PuntuarPanelPub} from '@/components/PuntuarPanelPub.vue'

  
        // Paso 5.1 Validar y Rediregir
          import {useRouter} from 'vue-router';

          const router = useRouter();

        function validarMaterial(material){
          	if(!material || material.tittle)
          		alert('Lo SIENTO, El Material no fue ENCONTRADO o no se SUBIÓ exitosamente');
          }else{
          		router.push('/aportes_carr-teach');
        }

        	//Nota es IMPORTANTE mencionar que esto va en 3 diferentes scripts 2 Paneles Hermnaos Puntuar y Moderar y el Pnl Padre 
            // PnlMatEducativo., por está razón es indispensable notar la ubicación de los componentes(hijos) y el Panel
            // padre -directorio panels.
            /**
             * A) DE LA LÓGICA DE PANELES POR PROP+EMIT
             * aún no codifico, pues el 1er paso es corregir la f(n) loggin del directorio Store, script indexs.js, ya que 
             * solo es útil con exp regular, es semi-alarmante utilizar las lineas del P1 ya que es posible q se rompa la sesión
             * y de antemano mencionado que previamente se guardo un script api a nivel del directorio publico del proyecto y que
             * este carga un fichero JSON(J. Script Obj. Notation) y lo ideal seria importar ese script.
             * 
             * B) DE LA LÓGICA DE PROFESORES
             * LOGICA DE AUTH TEACHERS(PROFFS) -- sino se registra al primer profesor se rompe el acceso, por lo que se varian la condicion
             * harcodeada (sesión llana directa de campos), es mejor tener una plantilla ya hecha p/q no registros, 
             * los mismo profesores, decidiran el met mas viable. a mi opinión el JSON es perfecto, pero aun no se como integran
             * la lógica( [session api/json] estará en lugar de logica generica[(loggin de Estado])



 </script>