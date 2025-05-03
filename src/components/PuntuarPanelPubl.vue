	<template>
  <div class="puntuar-content-dig">
    <h1>Consideración del Material</h1>

    <section class="eval-material">
      <div class="rating-option">
        <label><input type="radio" name="rating" /> 3 Estrellas</label>
        <ul>
          <li><i class="bi bi-star"></i></li>
        </ul>
        <section>
          El Material está en condiciones inadecuadas:
          <ul>
            <li>A. El Contenido es Incompleto</li>
            <li>B. Está desactualizado</li>
            <li>C. Parece Fotocopiado</li>
            <li>D. No es muy legible</li>
          </ul>
        </section>
      </div>

      <div class="rating-option">
        <label><input type="radio" name="rating" /> 4 Estrellas</label>
        <ul>
          <li><i class="bi bi-star"></i></li>
        </ul>
        <section>
          <ul>
            <li>A. El material es completo</li>
            <li>B. El material está semi-legible</li>
          </ul>
        </section>
      </div>

      <div class="rating-option">
        <label><input type="radio" name="rating" /> 5 Estrellas</label>
        <ul>
          <li><i class="bi bi-star"></i></li>
        </ul>
        <section>
          <ul>
            <li>A. El material está completo</li>
            <li>B. El material es legible</li>
            <li>C. El material es actual</li>
          </ul>
        </section>
      </div>
    </section>

    <div class="render-conten-dig">
      <label>Alumno</label>
      <select>
        <option value="">usern1</option>
        <option value="">usern2</option>
        <option value="">usern3</option>
        <option value="">usern4</option>
      </select>

      <label>Publicación</label>
      <select>
        <option value="">Practica-1 Permisos & Usuarios</option>
        <option value="">Redes Vlan</option>
        <option value="">Generación de los LP</option>
        <option value="">Generación de PCs</option>
      </select>
    </div>

    <button class="btn-submit">Valorar Material</button>
  </div>
	</template>
	
	<style scoped>
		
	.puntuar-content-dig {
	  font-family: 'Aptos', sans-serif;
	  background-color: #f0fff4;
	  padding: 2rem;
	  border-radius: 10px;
	  max-width: 800px;
	  margin: auto;
	  box-shadow: 0 4px 12px rgba(0, 128, 0, 0.1);
	}

	h1 {
	  text-align: center;
	  color: #2e7d32;
	  margin-bottom: 2rem;
	}

	.eval-material {
	  display: flex;
	  flex-direction: column;
	  gap: 1.5rem;
	  margin-bottom: 2rem;
	}

	.rating-option {
	  background-color: #e8f5e9;
	  padding: 1rem;
	  border-left: 5px solid #66bb6a;
	  border-radius: 6px;
	}

	.rating-option label {
	  font-weight: bold;
	  color: #388e3c;
	}

	.rating-option ul {
	  padding-left: 1rem;
	  list-style-type: disc;
	}

	.rating-option section {
	  margin-top: 0.5rem;
	  color: #4e944f;
	}

	.render-conten-dig {
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	  margin-bottom: 2rem;
	}

	.render-conten-dig label {
	  font-weight: 600;
	  color: #2e7d32;
	}

	.render-conten-dig select {
	  padding: 0.5rem;
	  border-radius: 4px;
	  border: 1px solid #a5d6a7;
	  background-color: #f1fdf3;
	}

	.btn-submit {
		background: linear-gradient(
	    90deg,
	    #ffff99 0%,
	    #b2fab4 77%,
	    #66bb6a 100%
	  );
	  color: #333;
	  padding: 0.75rem 1.5rem;
	  border: none;
	  border-radius: 8px;
	  font-size: 1rem;
	  font-weight: bold;
	  cursor: pointer;
	  transition: box-shadow 0.3s ease-in-out, transform 0.2s;
	  display: block;
	  margin: 0 auto;
	  box-shadow: 0 0 10px rgba(102, 187, 106, 0.5);
	}

	.btn-submit:hover {
	  background-color: #4caf50;
	}

	.btn-submit:hover {
	  background-color: #4caf50;
	}
</style>

	<script setup>
		
	</script>