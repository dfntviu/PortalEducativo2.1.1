<template>
	<div>
		<h2></h2>
			<form @submit.prevent="loginSelect">
			<div>
			<label for="username"></label>
			<input v-model="username"   type="text" required>
		</div>
		
		<div>
		    <label for="password"></label>
			<input  v-model="password" type="password" required>
		</div>
			<div>
			   <select v-model="role">
				 <option value="">Selecciona la Sesión</option>
				 <option value="alumno">Alumno</option>
			 	 <option value="profesor">Profesor</option>
			   </select>
			</div>
				<button type="submit">Ingresar</button>
		</form>
		
	</div>
</template>

<script>
export default {
	 data(){
	 	return{
	 		username: '',
	 		password: '',
	 		role: ''
	 	};
	 },

	 methods:{
		loginSelect(){
				localStorage.setItem('userRole', this.role);
         
			if(this.role === 'alumno'){
				 if(this.username === 'dgomez' && this.password ==='psql25 ' ){
				 	            this.$router.push('/alumnos'); 
				 				// alert('user: '+this.username); alert('pw: '+this.password);
				 }else{
				     alert('alguna de sus credenciales es Incorrecta');
				 }

			}else if(this.role === 'profesor')  {
				if(/profesor/i.test(this.username) && this.password.length >5){
					 this.$router.push('/profesores');
				}else{
					 alert('La longitud del Password no cumple con el Estándar');
				}
			}
		}
	 }
	
};
</script>