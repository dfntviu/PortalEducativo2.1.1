 // Prop: Cambiar la logica y en lugar dl correo, JSON de credenciales}
 export  async function validarCredencialesProfesor( {username, password}){

        try{
            // Paso-1: Cargamos a los profesores de un fichero JSON usando fetch
             const response = await  fetch('/credenent.tchers.json'); 
             console.error(response);

             // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo JSON: ${response.statusText}`);
    }

    // Verificar el tipo de contenido
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("La respuesta no es un JSON válido.");
    }
             const data =  await response.json();

             // Paso-2 Buscar el objeto profs con coincidencia a las credenciales x tec
                const profesor = data.profesores.find(
                    (profe) => profe.correo === username  && profe.contrasena === password
                ); 

            // P3 - Si encontramos la credencial del profesor, en el objeto JS  
                if(profesor){
                    const profesorData = {
                       msge: "El acceso fue Autorizado",  
                            user_p: {
                               nombre: profesor.nombre,
                               rol:  profesor.rol,
                            },
                    };
                // P3.1 En cosecuencia, lo guardamos en el  LocalStge
               localStorage.setItem('profesor', JSON.stringify(profesorData)); 
                 return profesorData;  // # retornamos los datos d profesores

               }else{
                    throw new  Error("Las credenciales son invalidas");
                }

        }catch(error){
             throw new  Error(error.message);  // si ocurre otro error, se lanza
        }
                // P2 Vincular el Storage con profileAlumns pq renderice la sesion

    // setTimeout(()=>{
           // }, 1000); #fin-time-out
    // }); #Fin-Promesa
        
                // P2 Vincular el Storage con profileAlumns pq renderice la sesion
 }

       //validamos la sesion y no el registro del Alumno -> registerAlumnsView.js// P1 Cambiar la logica y en lugar de ser un correo, un arreglo de sesiones de alumno

   // El obj. fue alojar el fichero json publicamente, Vue no permite alojar dentro del codigo este tipo de formato
   // por lo que nunca lo encontrará aunque fisicamente este ahí, más que nada por seguridad quiero pensar