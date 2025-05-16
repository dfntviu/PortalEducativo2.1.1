<template>
  <div class="about">
    <h1>Facultad de Ingeniería</h1>
    <h2>Portal de Material Educativo</h2>
    
    
    <section><h3>Misión-FI-UaeMéx</h3>Preservar, trasmitir y extender el conocimiento científico y tecnológico en el área de ingeniería en computación con conciencia humanística, a través de planes y programas de estudio pertinentes y de calidad.</section>
    <section><h3>Objetivos </h3> 
      Implementar un Portal Web Educativo para la automatización y gestión del material de estudio, para la Facultad de Ingeniería de la UAEMéx mediante el Framework de FrontEnd Vue.js, utilizando HTML, JS y CSS. 
    </section>
  </div>
</template>

 <style scoped>
   /* Estilos generales */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #2d2d2d;
}

/* Contenedor principal */
.about {
  max-width: 800px;
  margin: 50px auto;
  background-color: #ffffff;
  padding: 40px;
  border-left: 8px solid #006400; /* verde institucional */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Títulos principales */
.about h1 {
  color: #006400; /* verde oscuro */
  font-size: 2.5em;
  margin-bottom: 0.2em;
  text-align: center;         /*n_1*/
  text-transform: capitalize; /*n_2*/
}

.about h2 {
  color: #b8860b; /* oro */
  font-size: 1.5em;
  margin-bottom: 1em;
}

/* Subtítulos */
.about h3 {
  color: #006400;
  text-align: center;
  margin-top: 1.5em;
  font-size: 1.2em;
}

/* Párrafos */
.about section {
  font-size: 1em;
  line-height: 1.6em;
  text-align: justify;
  color: #333;
  margin: 0 0 1em 0;
}

/* Elementos destacados */
.about h3::before {
  content: "★ ";
  color: #b8860b;
}

 </style>
