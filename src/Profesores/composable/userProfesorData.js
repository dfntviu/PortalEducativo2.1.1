// <script> never because es JS puro
	import {ref, onMounted, computed} from 'vue';
	import  { datosProfesor,cleanProfesores } from  '../views/profesorHelpers.js'; //new_1

	export function userProfesorData() { 
	 	
	 		// multiples arrays, se refactorizan por subarrays p/un objeto
	 	        const profesores = ref({
	 					 personal:[],
	 					 academico:[],	
	 					 trabajo:[],
	 					 sesion: []
				});

	 	const error = ref(null);
	 	
	 	// const data_academic:{
	 	// }

	 	const isDataLoaded = computed( ()=>{
	 		return(
	 		 	 profesores.value.personal.length > 0 || 
	 		 	 profesores.value.academico.length > 0 ||
	 		 	      profesores.value.trabajo.length > 0 ||
	 		 	  profesores.value.sesion.length  > 0
	 		 	  );
	 	});


		 /** function loadProfesorData(){
		 	try{  
		 		  // Solo basta con pedirlo una sola vez, se subdivio dentro del objeto, pero eso quiere decir que se obtenga las
		 		  // categorias iguales

		 			 /** 	  * Recuperamos el objetos de arrays una sola y  unica vez*  **

		 			const stored_profesores = JSON.parse(localStorage.getItem('profesores-data-categorias')) ||[];
		 			// console.log("agregamos ",profesores.value.personal)
		 		if (Array.isArray(stored_profesores) && stored_profesores.length > 0) {
		 				profesores.value = stored_profesores[0];
		 		}
		 			console.log('📥 Datos cargados desde localStorage:', stored_profesores);
		 		   // Obtener los valores x separado d/cada arr.-> sin importar si todas las categ. estan llenas
		 		 	  	
		 		 	  	// Debugger x categoria  (debbug infuncional)
				 	/* console.log("Datos desde localStorage:", { personales: profesorPersonal.value, 
				 	    academicos: profesorAdecemic.value, empleo: profesorJob.value, sesion: profesorSession.value
		    		}); *

				 		// Validacion inf incompleta
		 		 	 if(!isDataLoaded.value){
		 		 	 	 error.value = 'Falta información de perfil del Profesor';
		 		 	 	   console.warn(error.value);
		 		 	 }

		 	}catch(err){
		 			 error.value = 'ERROR: Al cargar los datos del profesor';
		 		 	 	   console.warn(error.value,err);

		 	}
		}  **/

	 		function loadProfesorData() {
				  try {
				    const storedList = JSON.parse(localStorage.getItem('profesores-data-categorias')) || [];

				    if (storedList.length === 0) {
				      error.value = 'No hay datos guardados en localStorage.';
				      console.warn(error.value);
				      return;
				    }

				    // ✅ Tomamos el último profesor guardado (puedes cambiarlo según lógica)
				    const lastProfesor = storedList[storedList.length - 1];

				    // ✅ Asignamos a profesores.value correctamente
				    profesores.value = {
				      personal: lastProfesor.personal || {},
				      academico: lastProfesor.academico || {},
				      trabajo: lastProfesor.trabajo || {},
				      sesion: lastProfesor.sesion || {}
				    };

				    console.log('📥 Profesor cargado desde localStorage:', profesores.value);

				    if (!isDataLoaded.value) {
				      error.value = 'Falta información en los datos del profesor.';
				      console.warn(error.value);
				    }
				  } catch (err) {
				    error.value = '❌ Error al cargar los datos desde localStorage.';
				    console.error(error.value, err);
				  }
			}

	 		// Semejante al P3 - Conseguir la validacion por el Inicio de Sesión, d la f(n) 'loadProfesorData'
			function getProfesorEmail(email){
						email = email.trim().toLowerCase();
	 			 	 	return profesores.value.personal.find(
	 			 	 			prof =>prof.personal?.eminstitut?.trim().toLowerCase() === email
	 			 	 		   );  //aniadi el personal (13-jun-25)
	 		}

	 		// f(n) complementaria para covertir a String los vectores LStge x categ
	 		 function addAllDataProfessor(){
					 		 			try {
				    // ✅ Verificamos que datosProfesor.value existe y está completo
				    if (!datosProfesor.value || !datosProfesor.value.personal.eminstitut) {
				      console.warn('⚠️ datosProfesor está vacío o incompleto');
				      return;
				    }

				    // ✅ Creamos una copia profunda de los datos para evitar referencias reactivas
				    const new_profesores = {
				      personal: { ...datosProfesor.value.personal },
				      academico: { ...datosProfesor.value.academico },
				      trabajo: { ...datosProfesor.value.trabajo },
				      sesion: { ...datosProfesor.value.sesion }
				    };

				    console.log('📝 Profesor a guardar:', new_profesores);

				    // ✅ Obtenemos la lista actual del localStorage
				    let list_profesores = [];

				    try {
				      const raw = localStorage.getItem('profesores-data-categorias');
				      if (raw) {
				        list_profesores = JSON.parse(raw);
				        if (!Array.isArray(list_profesores)) {
				          console.warn('⚠️ El contenido existente en localStorage no es un array. Se sobreescribirá.');
				          list_profesores = [];
				        }
				      }
				    } catch (parseError) {
				      console.error('❌ Error al parsear localStorage:', parseError);
				      list_profesores = [];
				    }

				    // ✅ Agregamos el nuevo profesor
				    list_profesores.push(new_profesores);

				    // ✅ Guardamos en localStorage
				    localStorage.setItem('profesores-data-categorias', JSON.stringify(list_profesores));

				    // ✅ Confirmación
				    console.log('✅ Guardado con éxito en localStorage');
				    console.log('📦 Contenido actual:', JSON.parse(localStorage.getItem('profesores-data-categorias')));

				    // ✅ Limpiamos los campos después de guardar
				    cleanProfesores();
				  } catch (err) {
				    console.error('❌ ERROR al guardar en localStorage:', err);
				  }
	 		} 

	 			// Finalmente cargamos en el browser la logica de validación , invocamos, renderizamos
	 		onMounted(()=>{
	 			 loadProfesorData()
			});
	 			 // cleanProfesores();

	 			// enviamos todo a la vista profileTeach..., p/renderizar
	 		return {
	 			profesores,  // Sustituye a profesores
	 			error,
	 			isDataLoaded,
	 			cleanProfesores,
	 			addAllDataProfessor,
	 			getProfesorEmail,
	 			loadProfesorData
	 		};
	 			// addAllDataProfessor  //linea muerta
	 	}

	 	/*export function resetProfesorData(){
	 		localStorage.removeItem('profesores-d-academicos');
	 		localStorage.removeItem('profesores-d-personales');
	 		localStorage.removeItem('profesores-d-empleo');
	 		localStorage.removeItem('profesores-d-session');

	 		console.error("Hemos VACÍADO la Mem. del Navegador[LStorage] correctamente")
	 	}*/
