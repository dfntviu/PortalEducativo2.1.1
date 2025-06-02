import { createStore } from 'vuex';
import {loginAlumno,loginProfesor } from '@/utils/actions.js';

 export default createStore ({

 	state:{
 		usuario: null,
 		role: null,
 		isAuthenticated: false,
 		//  succMsg: '',    Linea a prueba
 	},

 	mutations: {
 		 SET_USER(state,payload){
 		 	console.log('SET_USER ejecutado con:', payload);
 		 	state.usuario = {
 		 	nombre: payload.user,
 		 	correo: payload.correo,
 		 };
 		    state.role = payload.role;
 		 	state.isAuthenticated = true;
 		 },
 		 LOGOUT(state){
 		 	state.usuario = null;
 		 	state.role    = null;
 		 	state.isAuthenticated = false;
 		 },
 		 /* #NEW_L
 		 SUCCESLABL(state){
 		 	state.succMsg = ''; 
 		 }*/
 	},

 	actions:{
 		async login( {commit}, {usuario,contrasenia}){
 			/** const  esCorreoCompleto_alum = /^[a-zA-Z-0-9%]+@alumno\.instituto\.mx$/.test(usuario);   //exp_rg-1
 				const  esCorreoCompleto_prof = /^[a-zA-Z-0-9%]+@profe\.instituto\.mx$/.test(usuario); 	//exp_rg-2 **/
			console.log('[login] Intentando login con:', usuario, contrasenia);
			// Unicamente valida el correo 
 			const esCorreoCompleto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario);   
				// sera necesario vaciar el Storage la llave de profesor 			
 			console.log('[login] ¿Correo completo válido?', esCorreoCompleto);
 			 if (!esCorreoCompleto) { 
 			 	// console.error('[login] Error: Correo no válido');
 			 	throw new Error("Error, es obligatorio teclear el correo por Completo");
 			 }
 			 	// validacion por dominio universitario
 			    const   esCorreoAlumno = /^[a-zA-Z0-9._%+-]+@alumno\.institucion\.mx$/.test(usuario);
 			    const esCorreoProfesor = /^[a-zA-Z0-9._%+-]+@(profesor|profe)\.institucion\.mx$/.test(usuario);

 			    console.log('[login] ¿Es alumno?', esCorreoAlumno);
  				console.log('[login] ¿Es profesor?', esCorreoProfesor);

 			 // Si el alumno(correo inst'l q da f. segui'o a la exp regular)
 			  if(esCorreoAlumno){
 			  	 console.log('[login] Ingresando como alumno...');
 			  	  return  await loginAlumno(commit, usuario, contrasenia);
 			  	   // console.log('- Ingresando como Alumno -s');
 			  }

 			  
 			  // Si el  profesor(correo termina en @profesor.institucion.mx)
 			  if(esCorreoProfesor){
 			  	 	 console.log('[login] Ingresando como profesor...');
 			  	 return  await loginProfesor(commit, usuario, contrasenia);
 			  	 	/* console.warn('- Ingresando como Profesor -');
 			  	 	  console.log('-',usuario,'-',contrasenia,'-',commit); */
 			  }	
 			   // console.error('[login] Error: Dominio no reconocido');
 			  throw new Error("El Dominio del correo no correponde a un rol válido");
 			  // /profesor/i -> la i=insinsitive-> sensible
 				//  regexcuni rf ('/^[a-zA-Z0-9._%+-]+@(?:alumno|profe)\.institucion\.mx$/ -> regx compuesta  es identica a 32,33 (vale x2)')
 		},
 		logout({commit}){
 		 	commit('LOGOUT');
 		}
 	},
 	
 	getters:{
 		  isAlumno: state => state.role === 'alumno',
 		isProfesor: state => state.role === 'profesor',
 	},

 });

 /**  
  *  Advertencia: Activar este codigo, cuando el LStorage este vacio, los segmentos del 42 - 54 vinculadas con acciones es 
  *  infuncional, pues cuando se quiero probar todo lo desarrollado prev. necesitamos regitrar un alumno, con ello se
  *  activara todas las características de ambos roles: usuario(alum), administrador profesor, cabe mencionar que aunque
  *  ya se tienen las f(n)s para alumno y profesor expuestas en api, fueron utiles para el release de prueba, mientras q
  *  la ver. actual no esta vinculada. todo el segemnto (31-59) es infuncional las f(n)s invocadas tienene 3 detalles q
  *  aun no son solucionados. por lo que si se requiere agregar nuevas funcionalidades se activira el código de advertencia.
  *  ============ CÓDIGO DE ADVERTENCIA ===============
  *  localStorage.setItem('usuario_loggin', usuario);  //referenciar el correo
		 				// Leer Alumnos desde el LocalStorage
		 			   const      register_list = JSON.parse(localStorage.getItem('alumnos-registrados'))||[];  //# Array-Sintax
		 			   const usuario_encontrade =  register_list.find(alumno => alumno.email === usuario  && alumno.passwd === contrasenia);
		 			   // Cambio lineas: 33 y 34
		 			if(usuario_encontrade){
		 				 commit('SET_USER', {usuario, role: 'alumno'});
		 			}else if((/profesor/i.test(usuario)) && contrasenia.length > 5){
		 				//localStorage.setItem('user-loggin_profesor', usuario);  referenciar usuario prof
		 				commit('SET_USER', {usuario, role: 'profesor'});
		 			} else {
		 				throw new Error('Las credenciales son inválidas');
		 				 // commit()
		 			}  
		 			 // (usuario === 'dgomez' && contrasenia === 'psql25 ') || (usuario === 'pjuan@alumno.institucion.mx' && contrasenia.length>5) en lugar, d la l.34
    s**/