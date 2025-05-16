<template>

  <!-- Block of tags new -->  
  <!-- <nav class="nav-links d-none d-lg-blog" role="navigation"> -->
    <div class="bg-nav-links d-none d-lg-block" >
      <img src="./assets/logo.fi-uamex.png" id="logo-univ" alt="portal.educ" >
      <!-- <div> muestre aqui </div> -->
    </div>
    <!-- <li><a href="/contactanos">Contactanos</a></li> infunction maybe margins of page, -->
  <!-- </nav> -->
  
        <NavegacionAlumno     v-if="store.getters.isAlumno"/>
        <NavegacionProfesores v-if="store.getters.isProfesor"/>
      <router-view/>
      
      <!--<button @click="crearSesion"> Procesar</button> <div v-if-else="usoRol==''"> </div> --
         <label for="estudiante">Estudiante</label><br> <input type="radio" name="rol" value="estudiante"  
         id="Estudiante">  -->
</template>

<style scoped>
   /* Estilo  UAEMex */
  #logo-univ{
    height: 71px;
    width: 132px;
  }
  /*#sp-menu {  }*/

  .bg-nav-links {
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

  /*.nav-links router-link { color: #ffffff; font-weight: 600; text-decoration: none; transition: color 0.3s ease;
  } .nav-links router-link:hover { color: #ffd700; /* Dorado al pasar el mouse *s*   } .logo-link { display: flex; align-items: center; }*/

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
  
  <script setup>
     
     import { useStore } from 'vuex';
    /* import      NavegacionAlumno from './Layouts/alumnosLayout.vue';  
     import      NavegacionProfesores from './Layouts/profesoresLayout.vue';  */
       import      NavegacionAlumno from      './components/NavegacionAlumno.vue';  
      import   NavegacionProfesores from './components/NavegacionProfesores.vue';
          // darLuzVereAlumno,
          const store  = useStore();
        
  </script>