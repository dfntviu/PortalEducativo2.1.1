<template>
  <!-- Block of tags new -->

  <nav class="nav-links d-none d-lg-blog" role="navigation">
    <div id="sp-menu" class="#sp-menu d-flex">
      <img src="../src/assets/logo.fi-uamex.png" id="logo-univ" alt="portal.educ" >
    </div>

    <div class="nav-links d-none d-lg-block">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Nosotros</router-link> |
      <router-link to=/loggearse>Iniciar Sesión</router-link> |
      <router-link to="/formulario-register">Formulario Registro</router-link> | 
      <router-link to="/register-alumnos">Alumnos Registrados</router-link> |
      <router-link to="/rev-material-educ2">Consultar Material</router-link>  |
      <router-link to="/carga-material-educ2">Subir Contenido</router-link>  |
      <router-link to="/ar-notificaciones-pub">Ver Notificaciónes</router-link> |
      <router-link to="/carruseles-publicados">Publicaciones</router-link>  |
      <router-link to=/profile-alums>Perfil Alumno</router-link>|,   
      <router-link to=/loggout>Salir del Portal</router-link>|,
      <router-link to=/reg-teachs>Registro Profesores</router-link>|, 
      <!-- <router-link to="/form-email">Auxiliar</router-link>  enab for testing-->
    </div>
     <!--  <router-link to="/carga-material-educ">Subir Contenido</router-link>  |
      <router-link to="/rev-material-educ">Consultar Material</router-link>  | -->
  </nav>
  <router-view/>
</template>

<style scoped>
   /* Estilo  UAEMex */
#logo-univ{
  height: 71px;
  width: 132px;
}
  #sp-menu {
    height: 60px;
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
    background-color: #006400; /* Verde institucional */
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

/* Responsive helpers */
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
  }
</style>