<template>
		<div class="moderar-pub-content">
	 		<h1>Moderación del Material</h1>
	 		    <section class="eval-public">
	 		   		<div>
		 					<label>Emitir Juicio y Evaluar</label>
		 				<section> 
		 				  <textarea class="textarea-actions" ></textarea>
	 		 				 <div class="actions">
	 		 				   <button class="btn-aceptar">Aceptar</button>
	 		 				   <button class="btn-revision">Aceptar Con Revision</button>
	 		 				   <button class="btn-ignorar">Ingnorar</button>
	 		 				</div>
		 				</section>
		 			</div>
		 			<!-- <div class="rend-env-calif">
		 				<label>Cometario General</label>
		 				<textarea name="" id="" width="175px"  height="225px"></textarea>
	 				</div> -->
	 		    </section>	 			
	 	</div>
</template>

<script setup>

</script>

<style scoped>
.moderar-pub-content {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f5fff7;
  padding: 2rem;
  border-radius: 12px;
  max-width: 900px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 128, 0, 0.1);
  text-align: center;
}

.moderar-pub-content h1 {
  color: #2e7d32;
  margin-bottom: 2rem;
}

.eval-public {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.mod-section {
  flex: 1 1 45%;
  background-color: #e6f5ea;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 5px solid #81c784;
  text-align: left;
}

.mod-section label {
  font-weight: bold;
  color: #388e3c;
  display: block;
  margin-bottom: 0.5rem;
}

.textarea-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

 textarea {
  width: 100%;
  height: calc(1.5em * 9 + 1.5rem); /* 9 líneas + algo de respiro */
  line-height: 1.5em;
  padding: 1rem auto;
  border: 2px solid #66bb6a;
  border-radius: 8px;
  background-color: #f9fff9;
  resize: none;
  font-size: 1rem;
  color: #2e7d32;
  margin-bottom: 1.5rem; /* margen entre textarea y los botones */
  box-shadow: inset 0 0 5px rgba(102, 187, 106, 0.2);
}

.actions {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.actions button {
  flex: 1 1 auto;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s;
}

/* Botones personalizados */
.btn-aceptar {
  background: linear-gradient(
    90deg,
    #ffff99 0%,
    #b2fab4 77%,
    #66bb6a 100%
  );
  color: #333;
  box-shadow: 0 0 10px rgba(102, 187, 106, 0.5);
}

.btn-aceptar:hover {
  box-shadow: 0 0 20px rgba(102, 187, 106, 0.7),
              0 0 30px rgba(102, 187, 106, 0.3);
  transform: scale(1.05);
}

.btn-revision {
  background-color: #fff176;
  color: #555;
}

.btn-revision:hover {
  background-color: #ffee58;
  transform: scale(1.05);
}

.btn-ignorar {
  background-color: #ef5350;
  color: white;
}

.btn-ignorar:hover {
  background-color: #e53935;
  transform: scale(1.05);
}

/*.textarea-actions textarea:focus {
  outline: none; border-color: #43a047; background-color: #f1fff4;
  box-shadow: 0 0 6px rgba(67, 160, 71, 0.3); transition: all 0.3s ease-in-out;
}*/

</style>