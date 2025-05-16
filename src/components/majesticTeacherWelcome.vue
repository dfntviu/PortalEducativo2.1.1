<style scoped>
	/*	Estilo General */
	.habilitar_profesores{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f5f5f5;
	}
	
	.titulo_profesores{
		font-family: 'Georgia', serif;
		font-size: 2.4rem;
		color: #4B0082;
		animation: welcome_input 2s ease-in-out;
		text-align: center;
		position: relative;
	}

	/*	Animación  de Entrada Global */
	@keyframes welcome_input {
		0%{
			opacity: 0;
			transform: scale(0.6);
		}

		100% {
			opacity: 1;
			transform: scale(1.0);
		}
	}
	/* cual su proposito   */
	.indiv_letters {
		display: inline-block;
		animation: ocultar_letras 0.7s steps(1, end) forwards;
		animation-delay: 3s;
	}

		/* Ocultar un caracter a 1  a la vez */
		.indiv_letters span{
			display: inline-block;
			opacity: 1;
			animation:  caracter_a_caracter 0.5s steps(1, end) forwards;
		}

		/*pseudoselector:  nonesimo hijo d c/caracter  -> [no funciona]*/
		.indiv_letters span:nth-child(1) {animation-delay: 3.1s;}
		.indiv_letters span:nth-child(2) {animation-delay: 3.3s;}
		.indiv_letters span:nth-child(3) {animation-delay: 3.5s;}
		.indiv_letters span:nth-child(4) {animation-delay: 3.7s;}
		.indiv_letters span:nth-child(5) {animation-delay: 3.9s;}
		.indiv_letters span:nth-child(6) {animation-delay: 4.1s;}
		.indiv_letters span:nth-child(7) {animation-delay: 4.3s;}
		.indiv_letters span:nth-child(8) {animation-delay: 4.5s;}
		.indiv_letters span:nth-child(9) {animation-delay: 4.7s;}

		@keyframes caracter_a_caracter {
			to{
				opacity: 0;
				transform: translateY(-20px);
			}
		}

</style>

<template>
	<div class="habilitar_profesores">
		<h1 class="titulo_profesores">Bienvenidos
		  <span class="indiv_letters" ref="letrasContainer">Profesores</span>
	    </h1>
	</div>
</template>


<script setup>
	 import  {ref, onMounted} from 'vue';

	 const letrasContainer = ref(null);
		onMounted( ()=>{
			 // Convertimos profesores en tags span caracter a caracter
			const container = letrasContainer.value;
			const text = container.textContent;  //leyenda profesores
			container.innerHTML = '';  //elimina el contenido origin

			for(let char of text){
				const span = document.createElement('span');
				  span.textContent = char;
				  container.appendChild(span);
			}

			// void container.offsetWidth; > (reinicia la animacion)

			/* Array.from(container.children).forEach((span, index) => {
		       span.style.animationDelay = `${3.1 + index * 0.2}s`;
			    span.style.animationName = 'caracter_a_caracter';
			}) */
	});
</script>
