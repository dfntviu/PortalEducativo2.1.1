export  async function validarCredenciales( {username, password}){

   return new Promise((resolve,reject)=>{
	setTimeout(()=>{
	 	 	const correo_valido = "dgomez@alumno.institucion.mx";
	 	 	const pass_valida = "psql25 ";

	 	 	    if(username === correo_valido && password === pass_valida){
	 	 	    	const data = {
	 	 	    		 msge: "El Acceso fue Autorizado",
	 	 	    		   user:{
	 	 	    		   		nombre: "daniel gomez",
	 	 	    		   		rol: "estudiante",
	 	 	    		   },
	 	 	    	};

	 	 	    	resolve(JSON.stringify(data)); //transforma txt
	 	 	    }else{
	 	 	    	reject(new Error("Las Credenciales son inválidas.\nRevise nuevamente"));
	 	 	    }
	 	    }, 1000); //#fin-time-out
    }); // #Fin-Promesa

 }

  // P1 Cambiar la logica y en lugar de ser un correo, un arreglo de sesiones de alumno

  // P2 Vincular el Storage con profileAlumns pq renderice la sesion

  // P3 esto sera util p mas procesos como, el rol d profesores: Muestre contenido esp del alumno
     //validamos la sesion y no el registro del Alumno -> registerAlumnsView.js