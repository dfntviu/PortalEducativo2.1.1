import { ref }	from 'vue'; // p.crit-1faltaba con llaves
export const p_datosFrmPrf = ref({   //los valores de los campos deben ser identicas a los de la f(n) de limpieza
						nomb: '',
						ap_materno: '',
						ap_paterno: '',
						direccion: '',
						telephone: null,  //tenia cadena
						genero: '',
						eminstitut: ''	
					});
// ACADEMICOS
export const ac_datosFrmPrf = ref({
			 cta: null, //tenia cadena
			 opcSelected: '', 
			 tit_prof: '',
			 egreso: ''
		});
// TRABAJO	
export const jb_datosFrmPrf = ref ({
			 n_materias: null,
			 tipo_jornada: '' ,
			 fecha: '',
			 area: ''
		});
// SESIÓN
export const sn_datosFrmPrf =ref({
			fecha: '',
			n_aportacion:  null,
			formato: '',
		});


		export function cleanProfesores(){ 
			p_datosFrmPrf.value = {
					nomb: '',
					ap_materno: '',
					ap_paterno: '',
					direction: '',
					telephone: null ,
					genero: '',
					eminstitut: ''
			};

			ac_datosFrmPrf.value = {
				cta: null,
			    opcion: '',
			    tit_prof: '',
			    egreso: ''
			};

			jb_datosFrmPrf.value = {
				 n_materias:  null ,
					 tpo_jornada: '' ,
					 fecha: '',
					 area: ''
			};

			sn_datosFrmPrf.value = {
				fecha: '',
				n_aportacion: null,
				formato: '',
			}; // faltaba (;)

		}