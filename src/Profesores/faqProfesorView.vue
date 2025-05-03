<template>
    <div class="conten-prof">
    	<h2>Preguntas y Respuestas Frecuentes - [Alumnos]</h2>
    	<FaqProfesoresAlumnos/>
    </div>
</template>
<script setup>
	import FaqProfesoresAlumnos from '../components/FaqProfesoresAlumnos.vue';
</script>
<style>
    .conten-prof{
    	margin: 17px 68px;
    	border: 2.4px solid rosybrown;
    }
    h2{
    	font-family: 'Tahoma', sans-serif;
    	font-size: 1.5em;
    	text-transform: capitalize;
    	text-align: center;
    	color: #A0522D;
    }
</style>