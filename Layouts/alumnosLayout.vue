<template>
	<div>
		<NavegacionAlumno/>
		<router-view/>
	</div>
</template>
<script>
	 import NavegacionAlumno from '@/compontents/NavegacionAlumno.vue';

	 export default{
	 	components: {NavegacionAlumno}
	 };
</script>