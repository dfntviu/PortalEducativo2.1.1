import { createStore } from 'vuex';

 export default createStore ({

 	state:{
 		usuario: null,
 		role: null,
 		isAuthenticated: false,
 		//  succMsg: '',    Linea a prueba
 	},

 	mutations: {
 		 SET_USER(state,payload){
 		 	state.usuario = payload.user;
 		 	state.role	  = payload.role;
 		 	state.isAuthenticated = true;
 		 },

 		 LOGOUT(state){
 		 	state.usuario = null;
 		 	state.role    = null;
 		 	state.isAuthenticated = false;
 		 },/* #NEW_L
 		 SUCCESLABL(state){
 		 	state.succMsg = ''; 
 		 }*/
 	},

 	actions:{
 		login( {commit}, {usuario,contrasenia}){
 			  localStorage.setItem('usuario_loggin', usuario);  //referenciar el correo
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