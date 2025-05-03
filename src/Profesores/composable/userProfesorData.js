// <script> never because es JS puro
	import {ref, onMounted, computed} from 'vue';
	import  { p_datosFrmPrf, ac_datosFrmPrf, jb_datosFrmPrf,sn_datosFrmPrf,cleanProfesores } from  '../views/profesorHelpers.js'; //new_1


	export function userProfesorData() {
	 	
	 	const profesorPersonal = ref([]);
	 	const profesorAdecemic = ref([]);
	 	const    profesorJob = ref([]);
	 	const profesorSession = ref([]);
	 	const error = ref(null);

	 	// const data_academic:{

	 	// }
	 	const isDataLoaded = computed( ()=>{
	 		return(
	 		 	 profesorPersonal.value.length > 0 || 
	 		 	 profesorAdecemic.value.length > 0 ||
	 		 	      profesorJob.value.length > 0 ||
	 		 	  profesorSession.value.length
	 		 	  );
	 	});


		function loadProfesorData(){
		 	try{  
		 		   // Obtener los valores x separado d/cada arr.-> sin importar si todas las categ. estan llenas
		 			profesorPersonal.value = JSON.parse(localStorage.getItem('profesores-d-personales') ||'[]');
		 			// console.log("agregamos ",p_datosFrmPrf.value)
		 		 	profesorAdecemic.value = JSON.parse(localStorage.getItem('profesores-d-academicos')||'[]');
		 		 	// console.log("agregamos ",p_datosFrmPrf.value)
		 		 	     profesorJob.value = JSON.parse(localStorage.getItem('profesores-d-empleo')||'[]');
		 		 	     // console.log("agregamos ",jb_datosFrmPrf.value)
		 		 	  profesorSession.value = JSON.parse(localStorage.getItem('profesores-d-sesion') ||'[]');
		 		 	  // console.log("agregamos ",sn_datosFrmPrf.value)

				 	console.log("Datos desde localStorage:", {
				      personales: profesorPersonal.value,
				      academicos: profesorAdecemic.value,
				      empleo: profesorJob.value,
				      sesion: profesorSession.value
		    		});

		 		 	 if(!isDataLoaded.value){
		 		 	 	 error.value = 'Falta información de perfil del Profesor';
		 		 	 	   console.warn(error.value);
		 		 	 }else{

		 		 	 }

		 	}catch(err){
		 			 error.value = 'ERROR: Al cargar los datos del profesor';
		 		 	 	   console.warn(error.value);

		 	}
		}
	 		
	 		// Semejante al P3 - Conseguir la validacion por el Inicio de Sesión
			function getProfesorXSesion(idSesion){
	 			 	 	return profesoSession.value.find((elem)=>elem.id === idSesion);
	 		}


	 		function addAllDataProfessor(){

					   profesorPersonal.value.push({...p_datosFrmPrf.value});
					   localStorage.setItem('profesores-d-personales',JSON.stringify(profesorPersonal));

	 		 	 		profesorAdecemic.value.push({...ac_datosFrmPrf.value});
	 		 	 // los datos de cat2 d profesor en localStorage, se convirtiran  1° n 1 cadena JSON x 1/2 de stringify
	 		 	 	// posterior usarlo como obj nm'l JSON
					   localStorage.setItem('profesores-d-academicos',JSON.stringify(profesorAdecemic));
					   
					   profesorJob.value.push({...jb_datosFrmPrf.value});
					   localStorage.setItem('profesores-d-empleo',JSON.stringify(profesorJob));
					   
					   profesorSession.value.push({...sn_datosFrmPrf.value});
					   localStorage.setItem('profesores-d-session',JSON.stringify(profesorSession));

					  cleanProfesores();
	 		}


	 			// Finalmente cargamos en el browser la logica de validación , invocamos, renderizamos

	 		onMounted(()=>{
	 		  loadProfesorData();
	 		});


	 		return {
	 			profesorPersonal,
	 			profesorAdecemic,
	 			profesorJob,
	 			profesorSession,
	 			isDataLoaded,
	 			loadProfesorData,
	 			getProfesorXSesion,
	 			error,
	 			addAllDataProfessor  //new_1
	 		};
	 	}

	 	/*export function resetProfesorData(){
	 		localStorage.removeItem('profesores-d-academicos');
	 		localStorage.removeItem('profesores-d-personales');
	 		localStorage.removeItem('profesores-d-empleo');
	 		localStorage.removeItem('profesores-d-session');

	 		console.error("Hemos VACÍADO la Mem. del Navegador[LStorage] correctamente")
	 	}*/
