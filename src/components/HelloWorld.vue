<template>
  <div class="educational-portal" >
    <h1>Bienvenidos a su Espacio</h1>
    <div>
      <h5>Portal Web Educativo | Facultad de Ingeniería — UAEMéx</h5>
     <img src="../assets/wppr.fondo-home.jpg" alt="Wallpaper Vitral nocturno" class="vitralle">
    </div>
  </div>
  <section class="redirection">
    <span>
      <!-- <a href="/src/informationContact.vue"> <h6>Comunicate con Nosotros</h6> </a> -->
    </span>
  </section>
  <!-- el tag <p> solo puede contener texto y elementos inline (como <span>, <a>, etc.), pero no elementos block como <h1>-<h6>, <div>, <section>, etc. -->
</template>

<script>
export default {
  
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .educational-portal {
    background: linear-gradient(to bottom right, #003366, #002244); /* Azul profundo */
    color: #ffffff;
    padding: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
}

.header {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.vitralle {
    width: 1053px;
    height: 627px;
/*    border-radius:7px 4px 6px;*/
clip-path: circle(48%);
    display: block;  /*conjunto con auto*/
    margin: auto;
}

 .title-container {
    flex: 1;
  }

  h1 {
    text-align: center !important;
    font-size: 2.5rem;
    margin: 0;
    color: #d4af37; /* Oro elegante */
  }

  h5 {
    margin-top: 10px;
    font-weight: 400;
    text-align: center;
    font-size: 17.5px;
    font-family: courrier-new, monospace; 
    color: #a8e6cf; /* Verde pastel institucional */
  }

/* enlaces color institucional */
  a {
    color: #4CAF50;
    text-decoration: none;
  }

  a:hover {
    color: #81C784;
  }
  /* h3 { margin: 40px 0 0; } ul { list-style-type: none; padding: 0; }li 
    { display: inline-block; margin: 0 10px; } a { color: #42b983; } */
</style>
