 <script>
    /* Es una copia de seguridad del script Principal unicamente utilizado para pruebas
      # que perjudiquen los componentes, vistas u otros directorios indispensables para
       # el funciomaiento correcto del Projecto (no hay problema alguno si elimina 1 linea critica) */
   import NavegStudying from '/src/SchmaNav/NavegStudying.vue';
   import NavegTeachying from '/src/SchmaNav/NavegTeaching.vue';

    export default {
       components:{ NavegStudying, NavegTeachying},
         data(){
           return {
             userRole: localStorage.getItem('userRole') || null
           };
         }
    }
 </script>

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

 <template>
  <!-- Block of tags new -->

  <nav class="nav-links d-none d-lg-blog" role="navigation">
    <div id="sp-menu" class="#sp-menu d-flex">
      <img src="/src/assets/logo.fi-uamex.png" id="logo-univ" alt="portal.educ" >
    </div>

      <div   class="nav-links d-none d-lg-block">
        <NavegStudying v-if="userRole === 'study'"/>
        <NavegTeachying v-if="userRole === 'teach'"/>
      </div>
  </nav>
          <router-view/>
     
      <!-- <div> -->
        <!-- <li><a href=""><router-link to="/loggearse-profesores">Profesores</router-link></a></li> -->
      <!-- </div> -->
</template>

 