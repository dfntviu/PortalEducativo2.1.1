import { ref }	from 'vue'; // p.crit-1faltaba con llaves
 //  Modificación 1:  Reagrupando x objeto de arreglos, refactorizar y limpiar la Estructura.

export const datosProfesor = ref({   //los valores de los campos deben ser identicas a los de la f(n) de limpieza
			personal:{
					   nomb: '',
					   ap_materno: '',
					   ap_paterno: '',
					   direccion: '',
					   telephone: null,  //tenia cadena
					   genero: '',
					   eminstitut: ''
					},
			 // ACADEMICOS
			academico:{
					 cta: null, //tenia cadena
					 opcSelected: '', 
					 tit_prof: '',
					 egreso: ''  
				    },
			// TRABAJO	 
			trabajo:{
			 	  n_materias: null,
			 	  tipo_jornada: '' ,
			 	  fecha: '',
			 	  area: ''
			 	},

			// SESIÓN
			sesion:{	
					fecha: '',
					n_aportacion:  null,
					formato: '',
			    }
		});

		export function cleanProfesores(){
			datosProfesor.value = {
				personal:{	
					   nomb: '',
					   ap_materno: '',
					   ap_paterno: '',
					   direction: '',
					   telephone: null ,
					   genero: '',
					   eminstitut: ''
				},
				
				academico:{	
					cta: null,
			        opcSelected: '',
			        tit_prof: '',
			        egreso: ''
			    },
								
				trabajo:{ 
				       n_materias:  null ,
					   tpo_jornada: '' ,
					   fecha: '',
					   area: ''
				},
					
				sesion: {
					  fecha: '',
					 n_aportacion: null,
					  formato: '',
				}  // ## El ultimo valor no lleva ( , )
				 
			};  // faltaba (;)
		}