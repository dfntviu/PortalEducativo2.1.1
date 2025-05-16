  <template>

      <nav class="nav-links d-none d-lg-block" id="sp_menu">
        <router-link to="/home">Nosotros</router-link> |
        <router-link to="/welcome_profesor">Panel de Bievenida</router-link> |
      	<router-link to="/register-teach">Registrarse</router-link> |
        <router-link to='/profiles-teach'>Mostrar Perfil</router-link> | 
        <router-link to='/control_alum-teach'>Administrar Reg Alumnos</router-link> |
        <router-link to='/moderar-mat_educative'>Moderar Publicaciónes</router-link> |
        <router-link to='/aportes_carr-teach'>Publicaciones Recientes</router-link> |
        <router-link to="/faq_profesor-teach">Consultar Dudas</router-link>   |
        <router-link to="/logout-teacher" @click="handleCleanOut">Cerrar Sesión</router-link>
        <!--lazy-loading p/cerrar sesión #13  -->
      	 <!-- <router-link to="/profesores">Inciar Sesión</router-link> | -->
      </nav>
  </template>

  <style scoped>
    #sp_menu {
    height: 34px;
    padding: 0 20px;
    color: #fff !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-transform: uppercase;
  }
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    background-color: #87CEEB ; /* Verde institucional -> (006400)*/
    color: #ffffff;
    gap: 15px;
    align-items: center;
    padding: 10px 20px;
    font-size: 0.95rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  .nav-links router-link {
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-links router-link:hover {
    color: #ffd700; /* Dorado al pasar el mouse */
  }

  .logo-link {
    display: flex;
    align-items: center;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-flex {
    display: flex !important;
  }
  </style>