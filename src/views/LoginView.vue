 <template>
	<h1 class="title">Iniciar Sesión</h1>
	 	<div class="login-auth">
		 	<form @submit.prevent="login">
			  <input type="email" class="email"    placeholder="dgomez@alumno.institucion.mx" v-model="formData.username">
			  <span v-if="formError.username" class="error"> {{formError.username}}</span>
				<input type="password" class="password" placeholder="psql25 " v-model="formData.password">
 				<span v-if="formError.password" class="error" > {{formError.password}} </span>
	 				 <button type="submit" :disabled="loading">Autenticarse</button>
			  <router-link to="/formulario-register">Regístrate</router-link>   <!--siempre dentro-->
			</form>
	   <!-- <a href="/formulario-test">Olvidaste la Contraseña</a> -->
	  </div> 
	
 </template>

<style scoped>
  	  .title{
			  text-align: center;   	    /*new_1*/
			  text-transform: capitalize; /*new_2*/
  	  	margin: 19px auto;
  	  	background-color: #d4f7;
  	  	border-radius: 3px 2px 4px;
  	  	max-width: 942.6px;   /* tenia 945 pero era un poco asimetrico con la bar. de navegacion */
  	  }
  		input{
  		/*	padding: 10px;
		    margin: 10px 0;
		    width: 100%;
		    border: 1px solid #ccc;
		    border-radius: 5px;
		    box-sizing: border-box;
		    font-size: 14px;*/
  		  padding: 8px;
	  			margin: 13px auto;
	  			width: 295px;
	  			display: flex;
  		}

  		button{
  		  padding: 10px 15px;  /*10px 15px; */
		    margin-top: 15px;
		    background-color: #0077cc;
		    color: white;
		    border: none;
		    border-radius: 6px;
		    cursor: pointer;
		    font-size: 16px;   
		    font-weight: 500;   
		    width: 72%;
		    transition: background-color 0.3s ease;
  			width: 136px;
				 display: block;
    	  margin-left: auto;
    	  margin-right: auto;
  		} 
  		 /*padding: 5px;
  			 margin: 13px auto;*/

  		.cont-login{
  			/*display: flex; flex-direction: column; align-items: center;
		    margin: 40px auto; padding: 20px; background-color: #f0f4f8; border-radius: 8px;
		    box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 320px; color: #333; font-family: sans-serif;*/
         margin: 5px 2px;
          color: skyblue;
         
  		}
  		  input.error{
  			    border-color: #faa;
  			    border-color: #ffeded;
  		  }
</style>

<script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { validarCredenciales } from "@/api/autenticarAlum.js";

  export default {
  	name: "LoginView",
  	  
	  setup() {
	  	 const formData = ref({
	  	 	 username: '',
	  	 	 password: ''
	  	 });
	  	  
	  	  const formError = ref({});
	  	  const loading = ref(false);
	  	  const router = useRouter(); //+1 
	  	 	 
	  	 	  const login = async()=>{
	  	 	  		formError.value = {};

	  	 	  		try{
	  	 	  			loading.value = true;  //apert bandera

	  	 	  			const response = await validarCredenciales({
	  	 	  					username: formData.value.username,
	  	 	  					password: formData.value.password
	  	 	  			});

	  	 	  			const parsear = JSON.parse(response);
	  	 	  			   alert("Autentificación Exitosa. Puedes Subir tu Material");
	  	 	  			  // console.log("✅ La Autenticación fue Exitosa",parsear);

	  	 	  			  // redireccionar a la subida del material
	  	 	  			  router.push('/carga-material-educ2');
	  	 	  		}catch(err){
	  	 	  			alert("❌ Error al Autentificarse. Intenta nuevamente");
	  	 	  				// console.error("❌ Error al Autentificarse. Intenta nuevamente",err.mesage);
							// Se redirecciona así loggin o bien a la principal(seg. corresponda)
	  	 	  				router.push('/about');
	  	 	  		}finally{
	  	 	  			 loading.value = false; //clausura boleana
	  	 	  		}

	  	 	  };
	  	 	   //siempre irá fuera de los metodos [no DENTRO,]
  	  	  return {
		  	  	 	  formData,
		  	  	 	  formError,
		  	  	 	  loading,
		  	  	 	  login
		  	  	  }
	    }

	};

</script> 