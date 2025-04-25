<template>
	<form @submit.prevent="consolidarEmail">
		   <input   v-model="frmPba.nomb"  type="text" placeholder="Nombre">
		   <input   v-model="frmPba.apell"  type="text" placeholder="Apellido">
		   <input   v-model="frmPba.email"  type="email" placeholder="Correo" readonly>
		<button type="submit">Envíar</button>
	</form>
</template>
<script setup> 
import { onMounted, reactive, ref } from 'vue';
	
	const frmPba = reactive({
		 nomb: '',
		apell: '',
		email: '',
	})
	 
	 // Generar automaticamente el correo Institucional
 	function consolidarEmail(){
   		 		// Obtener la data carcteristica del usuario
	       const comp_ape = frmPba.apell.toLowerCase().replace(/\s+/g,'');
	       const pmr_nom  = frmPba.nomb.charAt(0).toLowerCase().replace(/\s+/g,'');
   		       	// Unificar la data del usuario
	      const unify_user = `${pmr_nom}${comp_ape}`; 
	      const   dominio = 'alumno.institucion.mx';
   		 			// Obt el email por completo
   		 	frmPba.email = `${unify_user}@${dominio}`;
   		     	
   		     console.log('Institucional: ',frmPba.email);
 	}

 		/*function eliminarSpaceTwNames(){
 	 		 if(pmr_nom === ' '){
 	 	  	  const del_spaceNme= pmr_nom.replace(`${pmr_nom' '}`,`${pmr_nom''}`);
 	 	  	   console.log('eliminar Espacios - ',del_spaceNme );
 	 	    }
 	 	    return del_spaceNme;
 	    }*/
    onMounted(()=>{	
   	  consolidarEmail();
    });
	// const email = ref(null);

   		 // const {nomb,apell,email} = frmPba;
		// const apellido = ref(null);

</script>