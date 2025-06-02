    /** F(n) logginProfesor:
     * responsable de autentificar un alumno en el Portal Educativo.
     *
     * 
     * - Busca en el Alm. Local(LStorage) una lista de alumnos previamente registrados
     * - Valida las credenciales ingresadas por el usuario (correo y contrasenia)
     * - Si se encuentra una coincidencia valida, guarda los datos de sesion en el alm. local
     *   y actualiza el estado global mediante `commit` auxiliandose de la mutacion 'SET_USER'.
     * - En caso de que no existan Alumnos registrados(en un entorno de prueba[demo]).
     *  [+] Si ninguna condicion se satisface, lanza un error notificando q' las credenciales no son validas
     * 
     *  Aditional-data:: 
     *  Esta f(n) forma parte del flujo de autentificación por roles(Alumno/Profesor) y asegura
     *  que solo los usuarios autorizados, puedan acceder a funcionalidades permititdas según corresponda su rol.
     * **/
      // console.log('leyendo el script de sesiónes...');
    
     // Es necesario registrar, no se asignaron las credenciales, si es primera vez se asigno cuenta demo.
    export async function loginAlumno(commit, usuario, contrasenia){
        const alumnosRegistrados =  JSON.parse(localStorage.getItem('alumnos-registrados')) || [];

        const alumno = alumnosRegistrados.find( 
                (alum)=> alum.email === usuario && 
                        alum.passwd === contrasenia );

        if (alumno) {
            const alumnoData = {
                msge:  "El acceso fue Autorizado",
                user_al:{
                    nombre: alumno.nombre,
                    rol: alumno.rol,
                }
        }
                // Guardamos las credenciales en el alm. local
            localStorage.setItem('usuario_loggin', usuario);
                // confirmamos parcialmente la sesion en el alm. local
             commit('SET_USER',{ user: {
                    nombre:alumno.nombre,
                    correo: alumno.email,
                },
                    role: 'alumno'
                });
              return true;
        }

        // Acceso libre, si es la primera vez (aún no hay registros de Alumnos), no cumple el criterio cuenta -> (credenciales demostracion)
        if(alumnosRegistrados.length === 0 &&
            contrasenia.length > 5 &&
            usuario  === 'ademo@alumno.institucion.mx'
          ){     // confirmamos las credenciales d/demostracion, (a modificar booleanos[alum, profr])
              commit('SET_USER', {...usuario,role: 'alumno'});
                return true;
           }

        // Enviamos la clase de Error, al no cumplir con los reqs de sesion Predeterminada
           throw new Error('Las credenciales del Alumno son inválidas');

    }
     // No es necesario registrar, todo se asigno a un fichero externo. Si es primera vez, se asigno cuenta demo.
    export async function loginProfesor(commit, usuario, contrasenia){
  	 
        console.log('✅ Entraste a loginProfesor()');

              // try {
                const response = await fetch('/credenent.tchers.json');
                    const contentType = response.headers.get('content-type');

                    console.log('fichero-JSON: ',response);
                    if (!contentType || !contentType.includes('application/json')) {
                      throw new Error('Contenido no válido');
                    }
                    // aniade la sincronia al fichero json
                    const data = await response.json();
                    console.log('📌 Comparando contra:', usuario, contrasenia);

                      
                    // ✅ Buscar profesor real -> [debuggeando credencial asignada x JSON]
                    console.log('[DEBUG] Comparando con usuario:', usuario, 'y contraseña:', contrasenia);  
                    const profesor = data.profesores.find(
                      (profe) => profe.correo === usuario && 
                            profe.contrasena === contrasenia  //tal cual como en el parametro
                    );
                       // console.log('[loginProfesor] Profesor encontrado:', profesor);
                       console.log('🔍 Resultado de búsqueda:', profesor);
                     if (profesor) {
                         console.log('✅ Profesor encontrado:', profesor);
                        const profesorData = {
                            msge: "El acceso fue Autorizado",
                             user_pr:{
                                 nombre: profesor.nombre,
                                 role: profesor.rol,
                             },
                        };

                        localStorage.setItem('usuario_loggin', JSON.stringify(profesorData));
                        console.log('📥 Guardando en localStorage:', profesorData);
                          commit('SET_USER', {
                            nombre: profesor.nombre,
                            correo: profesor.correo,
                            role: 'profesor'
                          });
                          console.log('✅ Autentificación exitosa para profesor registrado');
                          return true;
                        }

                    // 💡 Acceso demo:sin error, sin catch, factible
                     const esDemo = 
                       usuario === 'pdemo@profe.institucion.mx' &&
                       contrasenia === 'teach25';

                    if (esDemo) {
                        console.warn('Acceso DEMO para profesor');
                         commit('SET_USER', {
                            nombre: 'Profesor Demo',
                            correo: usuario,
                            role: 'profesor', // sí es clave
                         });
                         return true;
                    }
                        // ❌ Si no pasa ninguna de las validadciones previas
                    console.error('❌Las credenciales invalidas: de Profesor no han sido Encontrada(s)');
                    throw new Error('Las credenciales del profesor son inválidas');

                /** if (
                        data.profesores.length === 0 &&
                        usuario === 'pdemo@profe.institucion.mx' &&
                        contrasenia === 'teach25'
                     ) {
                      console.log('✅ Acceso DEMO concedido');
                      commit('SET_USER', {
                        correo: usuario,
                        role: 'profesor',
                      });
                      return true;
                    }
                throw new Error('Credenciales incorrectas');
                } catch (error) {
                    console.error('❌ Error al autenticar profesor:', error.message);

                    // ✅ Acceso DEMO si NO existe el archivo o NO hay profesores registrados aún
                    if (
                      usuario === 'pdemo@profe.institucion.mx' &&
                      contrasenia === 'teach25'
                    ) {
                      console.log('✅ Acceso DEMO concedido desde catch');
                      commit('SET_USER', {
                        correo: usuario,
                        role: 'profesor',
                      });
                      return true;
                    }
                    throw new Error('Error en loginProfesor: ' + error.message);
                }  **/
    }

    

    /**   console.log('accediste correctamente el filtro de la Exp. Regular');

       const response = await fetch('/credenent.tchers.json');
         const  contentType =  response.headers.get('content-type');  

        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Respuesta del servidor inválida');
        } 

      const data = await response.json();

        // Si el profesor esta firmado, coincide con el profesor prev. registrado 
      const profesor = data.profesores.find(  
        (profe)=> profe.correo === usuario && profe.contrasenia === contrasenia
        );

        if(profesor){
         const profesorData = {
            msge:  "El acceso fue Autorizado",
            user_pr:{
                nombre: profesor.nombre,
                rol: profesor.rol,
            },
         };
            // Guardaremos el rol del profesor en alm local del brow'r. [currentSession_profesor ]
          localStorage.setItem('usuario_loggin', JSON.stringify(profesorData));
             commit('SET_USER', { user: {  //definimo en el alm. local el acceso JSON
                   nombre: profesor.nombre, 
                   correo: profesor.correo
                    },
                    role:   'profesor'
                   });  //construimos el objeto completo

                return true;  //reg. el op. booleano
        } 
        alert('¿Como vamos?');

          // Acceso libre p/entorno demo -> (si no aún no hay profesores registrados  a->alumno demo->[del ingles, demostration])
        if( data.profesores.length === 0 
         &&     usuario === 'pdemo@profe.institucion.mx' &&
            contrasenia === 'teach25' //hago alusion a postgres SQL, 25 es la epoca actual
         ) {    //definimos en el alm. local el acceso demo
            commit('SET_USER',{
                   correo: usuario, 
                     role: 'profesor',
                });
                return true;  //ret. positivo
        } //# culmina el acceso demo 
        console.log('termino la Autenticación de profesor');
            // Sino cumple con los 2 criterios  del email institucional.
        throw new Error('Las Credenciales PROPORCIONADAS del profesor son inválidas'); **/
     //console.log('[loginProfesor] Profesor encontrado:', profesor); 