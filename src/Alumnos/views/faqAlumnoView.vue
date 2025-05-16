<template>
	<div class="conten-alum">
		 <h2>Preguntas y Respuestas Frecuentes - [Profesores]</h2>
    	<FaqProfesoresAlumnos/>
	</div>
</template>
<script setup>
	import FaqProfesoresAlumnos from '../../components/FaqProfesoresAlumnos.vue';
</script>
<style>
	.conten-alum{
    	margin: auto 2.3px;
    	border: 4px solid crimson;
    }
    h2{
    	font-family: sans-serif monospace;
    	font-size: 1.4em;
    	text-align: center;
    	text-transform: capitalize;
    	color: #A0522D;
    }
</style>