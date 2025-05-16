  <template>
        
    <!--  <div id="sp-menu" class="#sp-menu d-flex">
      <img src="../assets/logo.fi-uamex.png" id="logo-univ" alt="portal.educ" >
    </div> -->
    <nav class="nav-links_al d-none d-lg-block sp_menu-customize">
       <router-link to="/about">Principal</router-link> |
       <router-link to="/welcome_alumno">Bienvenidos Alumnos</router-link> | <!--testing view Welcme -->
    	 <router-link to="/formulario_reg">Formulario Registro</router-link> |
    	 <router-link to="/load_material">Cargar Material Ed.</router-link> |
    	 <router-link to="/rev_material">Revisar Material Ed.</router-link> |
       <router-link to="/profile_alumnos">Perfil del Alumno</router-link> |
    	 <router-link to="/area_notify">Ver Notificaciónes</router-link> |
    	 <router-link to="/faq_alumno">Consultar Dudas</router-link> |
       <router-link to="/loggout_alumno" @click="handleCleanOut">Salir Alumno</router-link>
       <!-- <router-link to="/loggearse">Alumnos Registrados</router-link> | -->
    </nav>
      <!-- <rotuer-link to="/register-alumnos">Alumnos Registrados</rotuer-link>
       <rotuer-link to="/rev-material-educ2">Consultar Material</rotuer-link>
       <rotuer-link to="/ar-notificaciones-pub">Ver Notificaciónes</rotuer-link>
       <router-link to="carruseles-publicados">Publicaciones</router-link> -->
       <!-- formulario-register
        loggearse   carga-material-educ2  rev-material-educ2 ar-notificaciones-pub
        ar-notificaciones-pub faq-alumnos  loggout_alumno -->
  </template>
      
  <script setup>
    import { useStore } from 'vuex';

    const store = useStore();
  </script>

  <style scoped>

    #logo-univ{
      height: 71px;
      width: 132px;
    }

    .sp_menu-customize {
      height: 35px;
      padding: 0 20px;
      color: #0bd !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      text-transform: uppercase;
      background-color: #BCDB;
    }


    /*.nav-links {
      display: flex;
      flex-wrap: wrap;
      background-color: #006400; // Verde institucional 
      color: #ffffff;
      gap: 15px;
      align-items: center;
      padding: 10px 20px;
      font-size: 0.95rem;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    }*/

    .nav-links_al router-link {
      color: #ffffff;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .nav-links_al router-link:hover {
      color: #0fb; /* Dorado al pasar el mouse  */
    }

    /*.logo-link {
      display: flex;
      align-items: center;
    }*

    /* Responsive helpers *
    .d-lg-block {
      display: block !important;
    }

    .d-flex {
      display: flex !important;
    }

    @media (max-width: 768px) {
      .d-lg-block {
        display: none !important;
      }

      .d-lg-none {
        display: flex !important;
      }

      .nav-links {
        flex-direction: column;
        align-items: flex-start;
        background-color: #61806c;
        width: 100%;
        padding: 10px 0;
      }
    }*/
  </style>